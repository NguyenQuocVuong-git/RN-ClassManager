/**
 * @fileoverview Enforce Feature-Sliced Design layer import constraints
 */

"use strict";

// We use `resolve` from eslint-plugin-import’s internal utilities.
// This respects the configured `import/resolver`, including "typescript".
const resolve = require("eslint-module-utils/resolve").default;
const path = require("path");

/**
 * Define the layers in top-to-bottom order (i.e., index 0 = topmost layer).
 * The lower the index, the "lower-level" the code. For instance:
 *   0 -> app
 *   1 -> views
 *   2 -> widgets
 *   3 -> features
 *   4 -> entities
 *   5 -> shared
 */
const LAYERS = ["app", "views", "widgets", "features", "entities", "shared"];

// Helper: return numeric index in LAYERS array, or -1 if not found.
function getLayerIndex(layerName) {
  return LAYERS.indexOf(layerName);
}

/**
 * Extract layer from a fully resolved file path:
 * e.g.,  /home/project/src/features/aaa/lib/foo.ts
 *         -> layer = "features"
 */
function getLayerFromResolvedPath(filepath) {
  const parts = filepath.split(path.sep);
  const srcIndex = parts.indexOf("src");
  if (srcIndex === -1 || srcIndex === parts.length - 1) {
    return null;
  }
  return parts[srcIndex + 1];
}

/**
 * Extract slice name from a fully resolved file path:
 * e.g.,  /home/project/src/features/aaa/lib/foo.ts
 *         -> slice = "aaa"
 * For layers "app" or "shared", we do not define slices.
 */
function getSliceNameFromResolvedPath(filepath) {
  const parts = filepath.split(path.sep);
  const srcIndex = parts.indexOf("src");
  if (srcIndex === -1 || srcIndex + 2 >= parts.length) {
    return null;
  }
  const layerName = parts[srcIndex + 1];
  if (layerName === "app" || layerName === "shared") {
    return null;
  }
  return parts[srcIndex + 2];
}

/**
 * Given a fully resolved file path (like `/home/.../src/features/aaa/...`),
 * return { layer, slice } or null if it doesn't match our FSD structure.
 */
function parseFsdLayerInfo(filepath) {
  const layer = getLayerFromResolvedPath(filepath);
  if (!layer || !LAYERS.includes(layer)) {
    return null;
  }
  const slice = getSliceNameFromResolvedPath(filepath);
  return { layer, slice };
}

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow importing from disallowed Feature-Sliced layers or slices",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      wrongLayer:
        'Disallowed import from layer "{{importLayer}}" ({{importLayerIndex}}) into layer "{{currentLayer}}" ({{currentLayerIndex}}).',
      crossSlice:
        'Disallowed cross-slice import from slice "{{importSlice}}" (layer "{{importLayer}}") into slice "{{currentSlice}}".',
    },
    schema: [],
  },

  create(context) {
    // 1) Determine layer/slice for *this* file (the one currently being linted)
    const currentFilePath = context.getFilename();
    const currentInfo = parseFsdLayerInfo(currentFilePath);
    if (!currentInfo) {
      // If we can't parse the current file's layer, skip all checks
      return {};
    }
    const { layer: currentLayer, slice: currentSlice } = currentInfo;
    const currentLayerIndex = getLayerIndex(currentLayer);

    return {
      ImportDeclaration(node) {
        // 2) Use `resolve(importPath, context)` to find the full real path
        const importPath = node.source.value;
        const resolvedFilePath = resolve(importPath, context);

        // If unresolved => possibly external package or something we can't handle
        if (!resolvedFilePath) {
          return;
        }

        // 3) Parse the resolved import’s layer & slice
        const targetInfo = parseFsdLayerInfo(resolvedFilePath);
        if (!targetInfo) {
          // e.g. external file, node_modules, or outside src => no check
          return;
        }

        const { layer: importLayer, slice: importSlice } = targetInfo;
        const importLayerIndex = getLayerIndex(importLayer);

        // 4) Check special app <-> shared rule (they can import each other freely)
        const isAppSharedCombo =
          (currentLayer === "app" && importLayer === "shared") ||
          (currentLayer === "shared" && importLayer === "app");
        if (isAppSharedCombo) {
          return;
        }

        // 5) Disallow imports from a "higher" layer
        //    i.e. if importLayerIndex < currentLayerIndex
        //    (since "app" is 0, "processes" is 1, etc.)
        if (importLayerIndex < currentLayerIndex) {
          context.report({
            node,
            messageId: "wrongLayer",
            data: {
              importLayer,
              importLayerIndex,
              currentLayer,
              currentLayerIndex,
            },
          });
          return;
        }

        // 6) Disallow cross-slice imports in the same layer (except for app/shared)
        if (importLayerIndex === currentLayerIndex) {
          // "app" or "shared" => no slices => free cross-import
          if (currentLayer === "app" || currentLayer === "shared") {
            return;
          }
          // If slice differs => cross-slice import => disallow
          if (currentSlice && importSlice && currentSlice !== importSlice) {
            context.report({
              node,
              messageId: "crossSlice",
              data: {
                importSlice,
                importLayer,
                currentSlice,
              },
            });
          }
        }
      },
    };
  },
};

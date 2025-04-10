import fsdImportPlugin from "eslint-plugin-fsd-import";

const fsdImport = fsdImportPlugin.default ?? fsdImportPlugin;

export default [
  {
    plugins: {
      "fsd-import": fsdImport,
    },
    rules: {
      "fsd-import/fsd-relative-path": "error",
      "fsd-import/public-api-imports": "error",
      "fsd-import/layer-imports": "error",
    },
  },
];

import path from 'path'
import globals from 'globals'
import gitignore from 'eslint-config-flat-gitignore'
import pluginImportX from 'eslint-plugin-import-x'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginPromise from 'eslint-plugin-promise'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import { createRequire } from 'module'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const require = createRequire(import.meta.url)
const fsdLayers = require('./eslint-plugin-fsd-layers/lib/index.js')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default tseslint.config(gitignore(), {
  files: ['src/**/*.{ts,tsx}'],
  ignores: ['eslint.config.js'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: __dirname,
    },
    globals: {
      ...globals.builtin,
      ...globals.browser,
    },
  },
  plugins: {
    'import-x': pluginImportX,
    'react-hooks': pluginReactHooks,
    'react-refresh': pluginReactRefresh,
    'unused-imports': pluginUnusedImports,
    'fsd-layers': fsdLayers,
  },
  rules: {
    ...pluginReactHooks.configs.recommended.rules,
    'fsd-layers/layer-imports': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        paths: [path.resolve(__dirname, 'src')],
      },
    },
  },
  extends: [
    ...tseslint.configs.recommended,
    ...typescriptEslint.configs.recommendedTypeChecked,
    pluginPromise.configs['flat/recommended'],
    pluginUnicorn.configs.recommended,
    eslintPluginPrettier,
  ],
})

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importX from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

import { namingConventionOptions } from './naming.js';

/**
 * @param {{ tsconfigRootDir: string }} options
 * @returns {import('eslint').Linter.Config[]}
 */
export function createBaseConfig({ tsconfigRootDir }) {
  return [
    {
      name: 'naovixen/ignores',
      ignores: [
        '**/dist/**',
        '**/.output/**',
        '**/.turbo/**',
        '**/node_modules/**',
        '**/coverage/**',
        '**/routeTree.gen.ts',
        '**/generated/**',
        'design-reference/**',
      ],
    },

    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    {
      name: 'naovixen/typescript',
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parserOptions: { projectService: true, tsconfigRootDir },
        globals: globals.es2023,
      },
      plugins: { 'import-x': importX },
      settings: {
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            alwaysTryTypes: true,
            noWarnOnMultipleProjects: true,
            project: ['packages/*/tsconfig.json', 'apps/*/tsconfig.json'],
          }),
        ],
      },
      rules: {
        '@typescript-eslint/naming-convention': ['error', ...namingConventionOptions],

        'max-lines': ['error', { max: 400, skipBlankLines: true, skipComments: true }],
        'max-lines-per-function': ['error', { max: 25, skipBlankLines: true, skipComments: true }],
        complexity: ['error', 10],

        'no-var': 'error',
        'prefer-const': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],

        'no-restricted-syntax': [
          'error',
          {
            selector: 'TSEnumDeclaration[const=true]',
            message:
              'const enum is banned: Vite and esbuild transpile one file at a time and cannot resolve it. Use a plain enum.',
          },
        ],

        'import-x/no-default-export': 'error',
        'import-x/no-cycle': 'error',
        'import-x/no-useless-path-segments': 'error',
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },

    {
      // A describe block is one function to this rule, so the size limits would cap how
      // many cases a suite can cover.
      name: 'naovixen/test-size',
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      rules: { 'max-lines-per-function': 'off', 'max-lines': 'off' },
    },

    {
      // Type-aware rules need a tsconfig, and the JavaScript config files are in none.
      name: 'naovixen/javascript',
      files: ['**/*.js', '**/*.mjs'],
      ...tseslint.configs.disableTypeChecked,
    },

    {
      name: 'naovixen/config-files',
      files: ['**/*.config.{js,ts,mjs}', '**/eslint.config.js', '**/vite.config.ts'],
      rules: {
        'import-x/no-default-export': 'off',
        'max-lines-per-function': 'off',
      },
    },

    prettierConfig,
  ];
}

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importX from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

import { namingConventionOptions } from './naming.js';

/**
 * Lint rules for every TypeScript file in the repository, regardless of package.
 *
 * Type-aware rules are on, which is what lets `naming-convention` tell a boolean from a
 * string and lets the unsafe-`any` rules see through function boundaries. That needs each
 * package to have a tsconfig, which `projectService` finds on its own.
 *
 * @param {object} options
 * @param {string} options.tsconfigRootDir Absolute path to the repository root.
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
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
        globals: globals.es2023,
      },
      plugins: {
        'import-x': importX,
      },
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
        // Naming, per .claude/rules/typescript.md.
        '@typescript-eslint/naming-convention': ['error', ...namingConventionOptions],

        // `var` is banned outright; see docs/decisions.md ADR-0011.
        'no-var': 'error',
        'prefer-const': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],

        // `const enum` cannot be transpiled a file at a time, which is how Vite builds
        // this project. `isolatedModules` catches the exported case; this catches the rest.
        'no-restricted-syntax': [
          'error',
          {
            selector: 'TSEnumDeclaration[const=true]',
            message:
              'const enum is banned: it cannot be transpiled per-file by Vite or esbuild. Use a plain enum.',
          },
        ],

        // Named exports only, so a symbol has exactly one name everywhere it is used.
        'import-x/no-default-export': 'error',
        'import-x/no-cycle': 'error',
        'import-x/no-useless-path-segments': 'error',
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

        // Every exported function states its return type, including `void`.
        '@typescript-eslint/explicit-module-boundary-types': 'error',

        // `import type` rather than a value import that only carries a type, so the import
        // is erased at build time.
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
        ],

        // An unused binding is either a mistake or dead code. An underscore says it is
        // deliberate.
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],

        // `any` is allowed only where a comment justifies it, which this rule's
        // suppression comment forces you to write.
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },

    {
      // Type-aware rules need a tsconfig, and the plain JavaScript config files in this
      // repository are not in one. Turning them off here is cheaper than inventing a
      // tsconfig that covers files TypeScript never compiles.
      name: 'naovixen/javascript',
      files: ['**/*.js', '**/*.mjs'],
      ...tseslint.configs.disableTypeChecked,
    },

    {
      // Config files are the one place a default export is required.
      name: 'naovixen/config-files',
      files: ['**/*.config.{js,ts,mjs}', '**/eslint.config.js', '**/vite.config.ts'],
      rules: {
        'import-x/no-default-export': 'off',
      },
    },

    // Turns off every stylistic rule Prettier already decides. Must stay last.
    prettierConfig,
  ];
}

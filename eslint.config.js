import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { createBaseConfig, createReactConfig, createTestConfig } from '@naovixen/eslint-config';

const repositoryRoot = dirname(fileURLToPath(import.meta.url));

/**
 * The dependency rules from CLAUDE.md, enforced.
 *
 * These are written against package names rather than file paths because that is how the
 * imports are actually written — a rule that matches what you read in the import
 * statement is one you can reason about without resolving anything.
 */
const dependencyDirectionConfig = [
  {
    name: 'naovixen/dependencies/core',
    files: ['packages/core/**/*.ts'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              message:
                'core is framework-free. Express the need as an interface and inject an implementation.',
            },
            {
              name: 'react-dom',
              message: 'core is framework-free and never touches the DOM.',
            },
          ],
          patterns: [
            {
              group: ['@naovixen/*'],
              message: 'core sits at the bottom of the graph and depends on nothing internal.',
            },
          ],
        },
      ],
    },
  },

  {
    name: 'naovixen/dependencies/styles',
    files: ['packages/styles/**/*.ts'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [{ name: 'react', message: 'styles is plain CSS and token data.' }],
          patterns: [
            {
              group: ['@naovixen/*'],
              message: 'styles depends on nothing.',
            },
          ],
        },
      ],
    },
  },

  {
    name: 'naovixen/dependencies/content',
    files: ['packages/content/**/*.ts'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@naovixen/*', '!@naovixen/core'],
              message: 'content may depend on core only.',
            },
          ],
        },
      ],
    },
  },

  {
    name: 'naovixen/dependencies/ui',
    files: ['packages/ui/**/*.ts', 'packages/ui/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@naovixen/*', '!@naovixen/core', '!@naovixen/styles'],
              message: 'ui may depend on core and styles only.',
            },
          ],
        },
      ],
    },
  },

  {
    name: 'naovixen/dependencies/system-page',
    files: ['packages/system-page/**/*.ts', 'packages/system-page/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@naovixen/*', '!@naovixen/core', '!@naovixen/styles', '!@naovixen/ui'],
              message: 'system-page may depend on core, styles and ui only.',
            },
          ],
        },
      ],
    },
  },
];

export default [
  ...createBaseConfig({ tsconfigRootDir: repositoryRoot }),
  ...createReactConfig(),
  ...createTestConfig(),
  ...dependencyDirectionConfig,
];

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { createBaseConfig, createReactConfig, createTestConfig } from '@naovixen/eslint-config';

const repositoryRoot = dirname(fileURLToPath(import.meta.url));

const noReact = [
  { name: 'react', message: 'This package is framework-free. Inject the capability instead.' },
  { name: 'react-dom', message: 'This package is framework-free and never touches the DOM.' },
];

/** Enforces the dependency direction in CLAUDE.md, written against package names. */
function restrictImports(packageDirectory, { mayImport = [], paths = [] }) {
  return {
    name: `naovixen/dependencies/${packageDirectory}`,
    files: [`packages/${packageDirectory}/**/*.ts`, `packages/${packageDirectory}/**/*.tsx`],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths,
          patterns: [
            {
              group: ['@naovixen/*', ...mayImport.map((name) => `!@naovixen/${name}`)],
              message:
                mayImport.length === 0
                  ? 'This package sits at the bottom of the graph and depends on nothing internal.'
                  : `This package may depend on ${mayImport.join(' and ')} only.`,
            },
          ],
        },
      ],
    },
  };
}

export default [
  ...createBaseConfig({ tsconfigRootDir: repositoryRoot }),
  ...createReactConfig(),
  ...createTestConfig(),

  restrictImports('models', { paths: noReact }),
  restrictImports('theming', { paths: noReact }),
  restrictImports('formatting', { paths: noReact }),
  restrictImports('cms', { mayImport: ['models'], paths: noReact }),
  restrictImports('seo', { mayImport: ['models'], paths: noReact }),
  restrictImports('components', { mayImport: ['formatting', 'models', 'theming'] }),
  restrictImports('design-system', { mayImport: ['components', 'theming'] }),
];

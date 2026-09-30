import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { createBaseConfig, createReactConfig, createTestConfig } from '@naovixen/nvpack/eslint';

const repositoryRoot = dirname(fileURLToPath(import.meta.url));

/** Every React package may use the shared test setup in its specs. */
const testing = ['nvpack'];

const noReact = [
    { name: 'react', message: 'This package is framework-free. Inject the capability instead.' },
    { name: 'react-dom', message: 'This package is framework-free and never touches the DOM.' },
];

/** Enforces the dependency direction in CLAUDE.md. */
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
                            group: [
                                '@naovixen/*',
                                ...mayImport.map((name) => `!@naovixen/${name}`),
                            ],
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

    restrictImports('theming', { paths: noReact }),
    restrictImports('utilities', { paths: noReact }),
    restrictImports('cms', { mayImport: ['utilities'], paths: noReact }),
    restrictImports('seo', { mayImport: ['utilities'], paths: noReact }),

    restrictImports('components', { mayImport: ['utilities', 'theming', ...testing] }),
    restrictImports('layout', { mayImport: ['utilities', 'theming', ...testing] }),
    restrictImports('blocks', { mayImport: ['components', 'utilities', 'layout', ...testing] }),
    restrictImports('portable-text', {
        mayImport: ['blocks', 'components', 'utilities', 'cms', ...testing],
    }),

    {
        /** Icon sources are static strings in this package's own files, never user input. */
        name: 'naovixen/icon-markup',
        files: ['packages/components/src/icon/Icon.component.tsx'],
        rules: { '@eslint-react/dom-no-dangerously-set-innerhtml': 'off' },
    },
];

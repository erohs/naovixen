import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { createBaseConfig, createReactConfig, createTestConfig } from '@naovixen/eslint-config';

const repositoryRoot = dirname(fileURLToPath(import.meta.url));

/** Every React package may use the shared test setup in its specs. */
const testing = ['component-testing'];

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

    restrictImports('models', { paths: noReact }),
    restrictImports('theming', { paths: noReact }),
    restrictImports('formatting', { paths: noReact }),
    restrictImports('cms', { mayImport: ['models'], paths: noReact }),
    restrictImports('seo', { mayImport: ['models'], paths: noReact }),
    restrictImports('component-testing', {}),

    restrictImports('components', { mayImport: ['formatting', 'theming', ...testing] }),
    restrictImports('layout', { mayImport: ['formatting', 'theming', ...testing] }),
    restrictImports('blocks', { mayImport: ['components', 'formatting', 'layout', ...testing] }),
    restrictImports('brand', { mayImport: ['components', 'formatting', ...testing] }),
    restrictImports('site-shell', {
        mayImport: [
            'blocks',
            'brand',
            'components',
            'formatting',
            'layout',
            'models',
            'theming',
            ...testing,
        ],
    }),
    restrictImports('portable-text', {
        mayImport: ['blocks', 'components', 'formatting', 'models', ...testing],
    }),
    restrictImports('design-system', {
        mayImport: [
            'blocks',
            'brand',
            'components',
            'formatting',
            'layout',
            'models',
            'portable-text',
            'site-shell',
            'theming',
        ],
    }),

    {
        /** Icon sources are static strings in this package's own files, never user input. */
        name: 'naovixen/icon-markup',
        files: ['packages/components/src/icon/Icon.component.tsx'],
        rules: { '@eslint-react/dom-no-dangerously-set-innerhtml': 'off' },
    },
];

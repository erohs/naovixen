import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { createBaseConfig, createReactConfig, createTestConfig } from '@naovixen/nvpack/eslint';

const repositoryRoot = dirname(fileURLToPath(import.meta.url));

const noReact = [
    { name: 'react', message: 'This package is framework-free. Inject the capability instead.' },
    { name: 'react-dom', message: 'This package is framework-free and never touches the DOM.' },
];

/**
 * Enforces the dependency direction in CLAUDE.md. Every package may use nvpack, which is
 * tooling rather than code the package ships.
 */
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
                                '!@naovixen/nvpack',
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

    restrictImports('components', { mayImport: ['utilities', 'theming'] }),
    restrictImports('blocks', { mayImport: ['components', 'utilities'] }),
    restrictImports('blog-content', {
        mayImport: ['blocks', 'components', 'utilities', 'cms'],
    }),

    {
        /** Icon sources are static strings in this package's own files, never user input. */
        name: 'naovixen/icon-markup',
        files: ['packages/components/src/icon/Icon.component.tsx'],
        rules: { '@eslint-react/dom-no-dangerously-set-innerhtml': 'off' },
    },
];

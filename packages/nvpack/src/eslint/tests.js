import vitest from '@vitest/eslint-plugin';
import testingLibrary from 'eslint-plugin-testing-library';

/** @returns {import('eslint').Linter.Config[]} */
export function createTestConfig() {
    return [
        {
            name: 'naovixen/tests',
            files: ['**/*.spec.ts', '**/*.spec.tsx'],
            plugins: { vitest },
            rules: {
                ...vitest.configs.recommended.rules,

                'vitest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],

                /** One flat describe per scenario, its title the whole sentence. */
                'vitest/max-nested-describe': ['error', { max: 1 }],
                'vitest/valid-title': [
                    'error',
                    {
                        mustMatch: {
                            describe: [
                                '^Using ',
                                'A describe title must start with "Using ", then any "given" context and the "when" action.',
                            ],
                            test: [
                                '^then it should ',
                                'A test title must start with "then it should ".',
                            ],
                        },
                    },
                ],

                'vitest/expect-expect': 'error',
                'vitest/no-disabled-tests': 'error',
                'vitest/no-focused-tests': 'error',
                'vitest/no-identical-title': 'error',
                'vitest/no-conditional-expect': 'error',
                'vitest/no-large-snapshots': 'error',
                'vitest/prefer-hooks-in-order': 'error',
            },
        },

        {
            name: 'naovixen/component-tests',
            files: ['**/*.spec.tsx'],
            ...testingLibrary.configs['flat/react'],
            rules: {
                ...testingLibrary.configs['flat/react'].rules,
                'testing-library/prefer-screen-queries': 'error',
                'testing-library/no-node-access': 'error',
                'testing-library/no-container': 'error',
                'testing-library/prefer-user-event': 'error',
            },
        },
    ];
}

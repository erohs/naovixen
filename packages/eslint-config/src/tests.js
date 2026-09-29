import vitest from '@vitest/eslint-plugin';
import testingLibrary from 'eslint-plugin-testing-library';

/**
 * Lint rules for test files.
 *
 * The title rules encode the wording in `.claude/rules/testing.md`. They can check that
 * each block starts with the right word, but not that the words are nested in the right
 * order — `valid-title` sees one title at a time. Nesting stays a review-time check.
 *
 * @returns {import('eslint').Linter.Config[]}
 */
export function createTestConfig() {
  return [
    {
      name: 'naovixen/tests',
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      plugins: {
        vitest,
      },
      rules: {
        ...vitest.configs.recommended.rules,

        // `it` is a lint error. Every test block is `test`.
        'vitest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],

        'vitest/valid-title': [
          'error',
          {
            mustMatch: {
              describe: [
                '^(Using |given |and |when )',
                'A describe title must start with "Using " (outermost), or "given ", "and " or "when ".',
              ],
              test: ['^then it should ', 'A test title must start with "then it should ".'],
            },
          },
        ],

        // A test with no assertion passes without proving anything.
        'vitest/expect-expect': 'error',
        'vitest/no-disabled-tests': 'error',
        'vitest/no-focused-tests': 'error',
        'vitest/no-identical-title': 'error',
        'vitest/prefer-hooks-in-order': 'error',

        // Tests describe behaviour through the public API, so reaching into a private
        // member is a design smell rather than a style preference.
        'vitest/no-conditional-expect': 'error',

        // Markup snapshots break on every refactor and assert nothing a reader can check.
        'vitest/no-large-snapshots': 'error',
      },
    },

    {
      name: 'naovixen/component-tests',
      files: ['**/*.spec.tsx'],
      ...testingLibrary.configs['flat/react'],
      rules: {
        ...testingLibrary.configs['flat/react'].rules,

        // Query the way a user would: by role, accessible name, label or text.
        'testing-library/prefer-screen-queries': 'error',
        'testing-library/no-node-access': 'error',
        'testing-library/no-container': 'error',
        'testing-library/prefer-user-event': 'error',
      },
    },
  ];
}

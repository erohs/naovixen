import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

/**
 * Lint rules for packages that render React.
 *
 * The accessibility rules are deliberately stricter than the plugin's own recommended
 * set: this project targets WCAG 2.2 AA and several of the defaults are warnings.
 *
 * @returns {import('eslint').Linter.Config[]}
 */
export function createReactConfig() {
  return [
    {
      name: 'naovixen/react',
      files: ['**/*.tsx'],
      languageOptions: {
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
        },
      },
      plugins: {
        react,
        'react-hooks': reactHooks,
        'jsx-a11y': jsxA11y,
      },
      settings: {
        react: { version: 'detect' },
      },
      rules: {
        ...react.configs.flat.recommended.rules,
        ...react.configs.flat['jsx-runtime'].rules,
        ...reactHooks.configs.flat.recommended.rules,
        ...jsxA11y.flatConfigs.recommended.rules,

        // React 17+ transforms JSX without React being in scope.
        'react/react-in-jsx-scope': 'off',

        // Props are typed by the component's `I<Name>Props` interface, so the runtime
        // propTypes check is redundant.
        'react/prop-types': 'off',

        // Accessibility rules the plugin only warns about, raised to errors.
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/interactive-supports-focus': 'error',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': 'error',
        'jsx-a11y/no-static-element-interactions': 'error',

        // Components are typed arrow constants, never function declarations.
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],

        // `key` on a list item must be stable, and an array index is not.
        'react/no-array-index-key': 'error',

        // `target="_blank"` without `rel="noreferrer"` hands the new tab a reference back.
        'react/jsx-no-target-blank': 'error',
      },
    },

    {
      // A component file holds the component and nothing else. Its props interface, enums,
      // constants and helpers belong in the sibling subfolders.
      name: 'naovixen/component-files',
      files: ['**/*.component.tsx'],
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            selector: 'ExportNamedDeclaration > TSInterfaceDeclaration',
            message: 'Move this interface to the component folder’s interfaces/ subfolder.',
          },
          {
            selector: 'ExportNamedDeclaration > TSTypeAliasDeclaration',
            message: 'Move this type to the component folder’s types/ subfolder.',
          },
          {
            selector: 'ExportNamedDeclaration > TSEnumDeclaration',
            message: 'Move this enum to the component folder’s enums/ subfolder.',
          },
          {
            selector: 'ExportNamedDeclaration > FunctionDeclaration',
            message:
              'A component file exports only its component. Move this function to the component folder’s functions/ subfolder.',
          },
        ],
      },
    },
  ];
}

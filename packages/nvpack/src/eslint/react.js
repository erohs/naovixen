import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11yX from "eslint-plugin-jsx-a11y-x";
import globals from "globals";

import { restrictedSyntax } from "./restricted-syntax.js";
import { naovixenPlugin } from "./rules/plugin.js";

const reactRecommended = eslintReact.configs["recommended-typescript"];

/** @returns {import('eslint').Linter.Config[]} */
export const createReactConfig = () => [
    {
        name: "naovixen/react",
        files: ["**/*.tsx"],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        plugins: {
            ...reactRecommended.plugins,
            ...jsxA11yX.configs.strict.plugins,
            "react-hooks": reactHooks,
            naovixen: naovixenPlugin,
        },
        settings: reactRecommended.settings,
        rules: {
            ...reactRecommended.rules,
            ...jsxA11yX.configs.strict.rules,
            ...reactHooks.configs.flat["recommended-latest"].rules,

            /** A scrolling region, such as a code block, must take focus to scroll by keyboard. */
            "jsx-a11y-x/no-noninteractive-tabindex": ["error", { tags: [], roles: ["region"] }],
            "naovixen/one-component-per-file": "error",
        },
    },

    {
        name: "naovixen/component-files",
        files: ["**/*.component.tsx"],
        rules: {
            "no-restricted-syntax": [
                "error",
                ...restrictedSyntax,
                {
                    selector: "ExportNamedDeclaration > TSInterfaceDeclaration",
                    message: "Move this interface to interfaces/.",
                },
                {
                    selector: "ExportNamedDeclaration > TSTypeAliasDeclaration",
                    message: "Move this type to types/.",
                },
                {
                    selector: "ExportNamedDeclaration > TSEnumDeclaration",
                    message: "Move this enum to enums/.",
                },
                {
                    selector: "ExportNamedDeclaration > FunctionDeclaration",
                    message: "A component file exports only its component. Move this to functions/.",
                },
            ],
        },
    },
];

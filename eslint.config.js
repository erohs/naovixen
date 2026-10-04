import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
    { ignores: ["dist/", ".astro/", "notes/", "design-reference/", "source-material/", "playwright-report/"] },
    ...tseslint.configs.strict,
    ...astro.configs.recommended,
    ...astro.configs["jsx-a11y-strict"],
    {
        rules: {
            "max-lines": ["error", { max: 400, skipBlankLines: true, skipComments: true }],
            "max-lines-per-function": ["error", { max: 25, skipBlankLines: true, skipComments: true }],
        },
    },
];

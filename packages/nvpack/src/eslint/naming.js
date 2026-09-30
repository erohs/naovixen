/** Later selectors win, so the broad default comes first and exceptions follow. */
export const namingConventionOptions = [
    {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
    },

    /**
     * PascalCase because components and contexts are assigned to consts. No UPPER_CASE on
     * purpose: this codebase has no SCREAMING_SNAKE_CASE.
     */
    {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
    },

    /** The format applies to what follows the prefix, so `isFeatured` is `is` + `Featured`. */
    {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'should', 'can'],
    },

    /** The one place a leading underscore does not mean "private". */
    {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
    },

    { selector: 'typeLike', format: ['PascalCase'] },
    { selector: 'enumMember', format: ['PascalCase'] },

    /** `prefix: ['I']` alone would accept `Internal`, so a capital must follow the I. */
    {
        selector: 'interface',
        format: ['PascalCase'],
        custom: { regex: '^I[A-Z]', match: true },
    },

    {
        selector: ['classProperty', 'classMethod', 'accessor'],
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
    },
    {
        selector: ['classProperty', 'classMethod', 'accessor'],
        modifiers: ['public'],
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
    },

    { selector: ['objectLiteralProperty', 'typeProperty'], format: ['camelCase', 'PascalCase'] },

    /** Anything quoted is not ours to rename: header names, CSS custom properties, CMS fields. */
    {
        selector: ['objectLiteralProperty', 'typeProperty'],
        modifiers: ['requiresQuotes'],
        format: null,
    },

    /** React's own name for raw markup: `dangerouslySetInnerHTML={{ __html }}`. */
    {
        selector: 'objectLiteralProperty',
        filter: { regex: '^__html$', match: true },
        format: null,
    },

    /** Portable Text's own field names, which every block and span carries. */
    {
        selector: ['objectLiteralProperty', 'typeProperty'],
        filter: { regex: '^_(type|key)$', match: true },
        format: null,
    },

    { selector: 'import', format: ['camelCase', 'PascalCase'] },
];

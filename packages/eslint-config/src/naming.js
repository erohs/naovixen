/**
 * The `@typescript-eslint/naming-convention` rule options that encode the conventions in
 * `.claude/rules/typescript.md`.
 *
 * Read the selectors top to bottom: later entries win over earlier ones, so the broad
 * default comes first and the specific exceptions follow.
 */
export const namingConventionOptions = [
  // Everything is camelCase unless something below says otherwise. Note the absence of
  // UPPER_CASE: this codebase has no SCREAMING_SNAKE_CASE, not even for module constants.
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },

  // Variables are usually camelCase, but a React component or context is assigned to a
  // PascalCase const, so both are allowed here.
  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'forbid',
  },

  // Booleans announce themselves. The format applies to what follows the prefix, so
  // `isFeatured` reads as `is` + `Featured`.
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['PascalCase'],
    prefix: ['is', 'has', 'should', 'can'],
  },

  // An unused parameter is conventionally underscored, which is the one place a leading
  // underscore does not mean "private".
  {
    selector: 'parameter',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },

  // Classes, type aliases, enums and type parameters.
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },

  // Interfaces carry an `I` prefix. `prefix: ['I']` alone would accept `Internal`, so the
  // custom pattern additionally requires a capital letter straight after the `I`.
  {
    selector: 'interface',
    format: ['PascalCase'],
    custom: {
      regex: '^I[A-Z]',
      match: true,
    },
  },

  {
    selector: 'enumMember',
    format: ['PascalCase'],
  },

  // A leading underscore marks a private class member, and is required on one.
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

  // Object and type properties are camelCase, or PascalCase when the object is acting as
  // an enum or a component map.
  {
    selector: ['objectLiteralProperty', 'typeProperty'],
    format: ['camelCase', 'PascalCase'],
  },

  // Anything that has to be quoted is not ours to rename: HTTP header names, CSS custom
  // properties, `data-*` attributes, Sanity field names.
  {
    selector: ['objectLiteralProperty', 'typeProperty'],
    modifiers: ['requiresQuotes'],
    format: null,
  },

  // Imported bindings are named by whoever exported them.
  {
    selector: 'import',
    format: ['camelCase', 'PascalCase'],
  },
];

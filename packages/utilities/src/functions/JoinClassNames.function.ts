/** Skips the falsy entries, so a modifier can be written `isFeatured && 'nv-card--featured'`. */
export const joinClassNames = (...classNames: readonly (string | false | undefined)[]): string =>
    classNames.filter(Boolean).join(" ");

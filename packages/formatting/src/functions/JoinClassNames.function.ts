/** Skips the falsy entries, so a modifier can be written `isFeatured && 'nx-card--featured'`. */
export function joinClassNames(...classNames: readonly (string | false | undefined)[]): string {
    return classNames.filter(Boolean).join(' ');
}

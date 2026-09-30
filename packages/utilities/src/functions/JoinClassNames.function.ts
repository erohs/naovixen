/** Skips the falsy entries, so a modifier can be written `isFeatured && 'nv-card--featured'`. */
export function joinClassNames(...classNames: readonly (string | false | undefined)[]): string {
    return classNames.filter(Boolean).join(' ');
}

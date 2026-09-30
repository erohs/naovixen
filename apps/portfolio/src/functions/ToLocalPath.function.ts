/**
 * Keeps a redirect on this site: anything that is not a plain path, including `//host`, which
 * browsers read as another site, becomes the home page.
 */
export function toLocalPath(target: string | undefined): string {
    if (target === undefined || !target.startsWith('/') || target.startsWith('//')) {
        return '/';
    }

    return target.includes('\\') ? '/' : target;
}

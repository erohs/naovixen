/** Leaves an absolute URL alone, such as an image on a CMS's CDN. */
export function resolveAbsoluteUrl(origin: string, pathOrUrl: string): string {
    if (/^https?:\/\//.test(pathOrUrl)) {
        return pathOrUrl;
    }

    const trimmedOrigin = origin.replace(/\/+$/, '');
    const rootRelativePath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;

    return `${trimmedOrigin}${rootRelativePath}`;
}

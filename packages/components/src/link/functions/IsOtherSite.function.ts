const otherSite = /^(?:[a-z][a-z\d+.-]*:)?\/\//i;

/** Another site is a full address (`https://…`) or one that names a host (`//…`). */
export function isOtherSite(href: string | undefined): boolean {
    return href !== undefined && otherSite.test(href);
}

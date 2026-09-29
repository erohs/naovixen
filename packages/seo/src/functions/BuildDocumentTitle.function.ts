/** A title that already names the site, as the home page's does, is used as it is. */
export function buildDocumentTitle(pageTitle: string, siteName: string): string {
    if (pageTitle.includes(siteName)) {
        return pageTitle;
    }

    return `${pageTitle} — ${siteName}`;
}

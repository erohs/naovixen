const otherSite = /^(?:[a-z][a-z\d+.-]*:)?\/\//i;

/** Another site is a full address (`https://…`) or one that names a host (`//…`). */
export const isOtherSite = (href: string | undefined): boolean => href !== undefined && otherSite.test(href);

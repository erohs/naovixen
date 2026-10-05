/** Whether a link leads to another site, so it opens in a new tab and says so. */
export const isExternal = (href: string): boolean => /^([a-z][a-z\d+.-]*:)?\/\//i.test(href);

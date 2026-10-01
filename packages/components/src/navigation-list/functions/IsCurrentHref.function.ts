/**
 * The home page matches only itself; any other section also matches the pages beneath it.
 * Nothing matches while no page is given, as in a list of links to other sites.
 */
export function isCurrentHref(currentHref: string | undefined, itemHref: string): boolean {
    if (currentHref === undefined) {
        return false;
    }

    if (itemHref === '/') {
        return currentHref === '/';
    }

    return currentHref === itemHref || currentHref.startsWith(`${itemHref}/`);
}

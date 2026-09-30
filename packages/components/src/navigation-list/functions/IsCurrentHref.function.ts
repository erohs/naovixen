/** The home page matches only itself; any other section also matches the pages beneath it. */
export function isCurrentHref(currentHref: string, itemHref: string): boolean {
    if (itemHref === '/') {
        return currentHref === '/';
    }

    return currentHref === itemHref || currentHref.startsWith(`${itemHref}/`);
}

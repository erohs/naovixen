const liveRegionSelector = '[role="status"], [role="alert"], [aria-live]';

/**
 * Makes everything on the page outside `element` inert, for something that covers the page without being
 * a `<dialog>`: nothing behind it can be focused, clicked or reached by a screen reader. Live regions stay
 * live, so announcements still reach the reader. Returns a function that undoes only what it changed.
 */
export const inertOutside = (element: HTMLElement): (() => void) => {
    const madeInert: HTMLElement[] = [];

    for (let current = element; current.parentElement !== null; current = current.parentElement) {
        for (const sibling of current.parentElement.children) {
            if (
                sibling !== current &&
                sibling instanceof HTMLElement &&
                !sibling.inert &&
                !sibling.matches(liveRegionSelector)
            ) {
                sibling.inert = true;
                madeInert.push(sibling);
            }
        }
    }

    return () => {
        madeInert.forEach((sibling) => {
            sibling.inert = false;
        });
    };
};

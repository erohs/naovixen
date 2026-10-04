/**
 * Whether an element is drawn: none of its ancestors is `display: none` and it is not `visibility: hidden`.
 * Read from computed styles, which every browser has, rather than `checkVisibility()`.
 */
export const isShown = (element: Element): boolean => {
    const view = element.ownerDocument.defaultView;

    if (view === null || view.getComputedStyle(element).visibility === "hidden") {
        return false;
    }

    for (let current: Element | null = element; current !== null; current = current.parentElement) {
        if (view.getComputedStyle(current).display === "none") {
            return false;
        }
    }

    return true;
};

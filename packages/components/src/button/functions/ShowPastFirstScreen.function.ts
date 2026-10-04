/**
 * A ref callback that sets `data-visible` while the page is scrolled a full screen down. It writes the
 * attribute itself rather than through React state, so scrolling never re-renders anything.
 */
export const showPastFirstScreen = (element: HTMLElement | null): (() => void) | undefined => {
    if (element === null) {
        return undefined;
    }

    const update = (): void => {
        element.dataset.visible = String(window.scrollY >= window.innerHeight);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
    };
};

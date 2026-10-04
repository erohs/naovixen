/**
 * Calls `onDismiss` when a link inside `container` is followed, by pointer or keyboard, since both fire a
 * click. For a menu of links, which should close even when the link leads to the page already shown, as
 * then nothing else changes to close it. Returns a function that stops listening, for a ref callback.
 */
export const dismissOnLinkFollow = (container: HTMLElement, onDismiss: () => void): (() => void) => {
    const onClick = (event: MouseEvent): void => {
        if (event.target instanceof Element && event.target.closest("a[href]") !== null) {
            onDismiss();
        }
    };

    container.addEventListener("click", onClick);

    return () => {
        container.removeEventListener("click", onClick);
    };
};

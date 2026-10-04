/**
 * Calls `onDismiss` when Escape is pressed while focus is inside `container`, for anything that opens
 * over or beside its invoker: a disclosure, a dropdown, a listbox. Returns a function that stops
 * listening, so it can be returned from a ref callback. A native `<dialog>` does this itself.
 */
export const dismissOnEscape = (container: HTMLElement, onDismiss: () => void): (() => void) => {
    const onKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "Escape" && !event.defaultPrevented) {
            event.preventDefault();
            onDismiss();
        }
    };

    container.addEventListener("keydown", onKeyDown);

    return () => {
        container.removeEventListener("keydown", onKeyDown);
    };
};

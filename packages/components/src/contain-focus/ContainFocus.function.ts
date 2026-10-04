import { findTabbable } from "./functions/FindTabbable.function";

/**
 * Keeps Tab inside `container`: past its last shown control focus wraps to its first, and Shift+Tab from
 * the first wraps to the last. For something that covers the page while it is open; pair it with
 * `inertOutside` so nothing behind can be reached another way, and with a way out such as Escape so it is
 * never a trap. Returns a function that stops it, for a ref callback.
 */
export const containFocus = (container: HTMLElement): (() => void) => {
    const onKeyDown = (event: KeyboardEvent): void => {
        if (event.key !== "Tab") {
            return;
        }

        const tabbable = findTabbable(container);
        const wrapFrom = event.shiftKey ? tabbable[0] : tabbable.at(-1);
        const wrapTo = event.shiftKey ? tabbable.at(-1) : tabbable[0];

        if (wrapTo !== undefined && container.ownerDocument.activeElement === wrapFrom) {
            event.preventDefault();
            wrapTo.focus();
        }
    };

    container.addEventListener("keydown", onKeyDown);

    return () => {
        container.removeEventListener("keydown", onKeyDown);
    };
};

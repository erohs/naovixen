import { isShown } from "./IsShown.function";

const focusableSelector = [
    "a[href]",
    "button:not(:disabled)",
    "input:not(:disabled):not([type='hidden'])",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    "summary",
    "[tabindex]",
].join(", ");

/** What Tab can reach inside `container`, in document order: focusable, in the tab order, shown and not inert. */
export const findTabbable = (container: HTMLElement): HTMLElement[] =>
    [...container.querySelectorAll<HTMLElement>(focusableSelector)].filter(
        (element) => element.tabIndex >= 0 && element.closest("[inert]") === null && isShown(element),
    );

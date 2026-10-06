/*
 * The menu is a native dialog, opened and closed without script. This adds two things:
 *
 * - Focus goes to the close button as the menu opens. Safari decides what can take focus
 *   before it shows a dialog that was hidden while closed, so on its own it gives none.
 * - Tab wraps from the menu's last control to its first, and Shift+Tab back. A dialog on its own
 *   lets focus leave for the browser's toolbar.
 */

const findMenu = (): HTMLDialogElement | null => document.querySelector<HTMLDialogElement>("#menu");

const focusCloseButton = (): void => {
    const menu = findMenu();
    if (menu?.open && !menu.contains(document.activeElement)) {
        menu.querySelector<HTMLElement>("[autofocus]")?.focus();
    }
};

const visibleControls = (menu: HTMLDialogElement): HTMLElement[] =>
    [...menu.querySelectorAll<HTMLElement>("a[href], button")].filter((control) => control.checkVisibility());

/** Past either end, focus wraps round; and if a browser lets it leave the menu anyway, it comes back. */
const wrapFocus = (event: KeyboardEvent): void => {
    const menu = findMenu();
    if (event.key !== "Tab" || !menu?.open) return;
    const controls = visibleControls(menu);
    const [edge, wrapTo] = event.shiftKey ? [controls[0], controls.at(-1)] : [controls.at(-1), controls[0]];
    if (document.activeElement === edge || !menu.contains(document.activeElement)) {
        event.preventDefault();
        wrapTo?.focus();
        return;
    }
    setTimeout(() => {
        if (menu.open && !menu.contains(document.activeElement)) wrapTo?.focus();
    });
};

const onClick = (event: MouseEvent): void => {
    if (event.target instanceof Element && event.target.closest('[commandfor="menu"][command="show-modal"]')) {
        setTimeout(focusCloseButton);
    }
};

export const connectMenu = (): void => {
    addEventListener("keydown", wrapFocus);
    addEventListener("click", onClick);
};

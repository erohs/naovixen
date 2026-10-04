import { containFocus } from "../../contain-focus/ContainFocus.function";
import { dismissOnEscape } from "../../dismiss-on-escape/DismissOnEscape.function";
import { dismissOnLinkFollow } from "../../dismiss-on-link-follow/DismissOnLinkFollow.function";
import { focusController } from "../../focus-controller/FocusController.function";
import { inertOutside } from "../../inert-outside/InertOutside.function";

/**
 * While the menu is open, the header and its menu are all that can be reached: the page outside is inert
 * and Tab wraps around what shows (the logo, the actions, the menu button and the menu's links). Escape,
 * or following any link in the header, even to the page already shown, closes the menu and puts focus
 * back on its button, where a new page then moves it on. Returns a cleanup.
 */
export const holdMenuOpen = (
    menu: HTMLElement,
    panelId: string,
    onClose: (openedOnPath: undefined) => void,
): (() => void) => {
    const header = menu.closest("header") ?? menu;
    const closeAndReturnFocus = (): void => {
        onClose(undefined);
        const panel = header.ownerDocument.getElementById(panelId);

        if (panel !== null) {
            focusController(panel);
        }
    };
    const cleanups = [
        inertOutside(header),
        containFocus(header),
        dismissOnEscape(header, closeAndReturnFocus),
        dismissOnLinkFollow(header, closeAndReturnFocus),
    ];

    return () => {
        cleanups.forEach((cleanup) => {
            cleanup();
        });
    };
};

import type { IFocusablePage } from "../navigation-focuser/interfaces/IFocusablePage";

/**
 * Browser only. The main content is the element with `id="main"`, which the skip link targets. A page
 * without an `<h1>` falls back to focusing the main content itself.
 */
export class DocumentPage implements IFocusablePage {
    public focusHeading(): void {
        const main = document.getElementById("main");
        const target = main?.querySelector("h1") ?? main;

        if (!target) {
            return;
        }

        if (!target.hasAttribute("tabindex")) {
            target.setAttribute("tabindex", "-1");
        }

        target.focus({ preventScroll: true });
    }
}

/*
 * The menu is a native dialog, opened and closed without script. This adds three things:
 *
 * - Safari decides what can take focus before it shows an opening dialog that was hidden while
 *   closed, so it gives none; focus goes to the close button, as other browsers do on their own.
 * - Following a link from the menu starts its closing slide at once, and the next page carries
 *   it on from the same point: it reads when the slide began before its first paint and resumes
 *   it there, so the sheet keeps moving across the change of page.
 * - Tab wraps from the menu's last control to its first, and Shift+Tab back. A dialog on its
 *   own lets focus leave for the browser's toolbar instead.
 */
(() => {
    const root = document.documentElement;
    const noteKey = "menu-closed-at";
    const slideLength = 500;

    const isOpeningClick = (target) => target.closest('[commandfor="menu"][command="show-modal"]') !== null;

    const isPlainSameSiteClick = (event, link) =>
        event.button === 0 &&
        !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) &&
        link.target === "" &&
        !link.hasAttribute("download") &&
        link.origin === location.origin;

    const focusCloseButton = () => {
        const menu = document.getElementById("menu");
        if (menu?.open && !menu.contains(document.activeElement)) menu.querySelector("[autofocus]")?.focus();
    };

    const controlsOf = (menu) =>
        [...menu.querySelectorAll("a[href], button")].filter((control) => control.checkVisibility());

    /** Past either end, focus wraps round; and if a browser lets it leave the menu anyway, it comes back. */
    const wrapFocus = (event) => {
        const menu = document.getElementById("menu");
        if (event.key !== "Tab" || !menu?.open) return;
        const controls = controlsOf(menu);
        const [first, last] = [controls[0], controls.at(-1)];
        const [edge, wrapTo] = event.shiftKey ? [first, last] : [last, first];
        if (document.activeElement === edge || !menu.contains(document.activeElement)) {
            event.preventDefault();
            return wrapTo?.focus();
        }
        setTimeout(() => {
            if (menu.open && !menu.contains(document.activeElement)) wrapTo?.focus();
        });
    };

    const resumeSlide = () => {
        const closedAt = Number(sessionStorage.getItem(noteKey));
        sessionStorage.removeItem(noteKey);
        const elapsed = Date.now() - closedAt;
        if (closedAt === 0 || elapsed >= slideLength) return;
        root.dataset.menuClosing = "";
        root.style.setProperty("--menu-slide-elapsed", `${-elapsed}ms`);
    };

    try {
        resumeSlide();
    } catch {
        // Storage can be blocked; the new page then simply arrives with the menu closed.
    }

    addEventListener("click", (event) => {
        if (!(event.target instanceof Element)) return;
        if (isOpeningClick(event.target)) return void setTimeout(focusCloseButton);
        const link = event.target.closest("#menu[open] a[href]");
        if (link === null || !isPlainSameSiteClick(event, link)) return;
        try {
            sessionStorage.setItem(noteKey, String(Date.now()));
        } catch {}
        link.closest("dialog")?.close();
    });

    addEventListener("keydown", wrapFocus);

    addEventListener("animationend", (event) => {
        if (!(event.target instanceof Element) || !event.target.matches("#menu:not([open])")) return;
        delete root.dataset.menuClosing;
        root.style.removeProperty("--menu-slide-elapsed");
    });
})();

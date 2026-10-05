/*
 * The menu is a native dialog, opened and closed without script. This adds three things:
 *
 * - Safari decides what can take focus before it shows an opening dialog that was hidden while
 *   closed, so it gives none; focus goes to the close button, as other browsers do on their own.
 * - Following a link from the menu starts its closing slide at once, and the next page carries
 *   it on: it reads when the slide began before its first paint, and keeps the resumed slide in
 *   time with that moment, so the sheet keeps moving across the change of page.
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

    let closedAt = 0;

    const readNote = () => {
        closedAt = Number(sessionStorage.getItem(noteKey));
        sessionStorage.removeItem(noteKey);
        const elapsed = Date.now() - closedAt;
        if (closedAt === 0 || elapsed >= slideLength) return;
        root.dataset.menuClosing = "";
        root.style.setProperty("--menu-slide-elapsed", `${-elapsed}ms`);
    };

    /**
     * The resumed animations start from the time spent when this script ran, which is already past
     * the old page's last frame. Styles can apply later than that, so as each starts it is moved
     * on to the time really spent since the click. Either way the slide only ever moves forward.
     */
    const keepTimeWithClick = (event) => {
        if (!("menuClosing" in root.dataset) || !(event.target instanceof Element)) return;
        for (const animation of event.target.getAnimations()) {
            const { delay = 0 } = animation.effect?.getTiming() ?? {};
            const target = Date.now() - closedAt + delay;
            animation.currentTime = Math.max(Number(animation.currentTime ?? 0), target);
        }
    };

    try {
        readNote();
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
    addEventListener("animationstart", keepTimeWithClick);

    addEventListener("animationend", (event) => {
        if (!(event.target instanceof Element) || !event.target.matches("#menu:not([open])")) return;
        delete root.dataset.menuClosing;
        root.style.removeProperty("--menu-slide-elapsed");
    });
})();

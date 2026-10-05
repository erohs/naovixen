/*
 * The menu is a native dialog, opened and closed without script. This adds three things:
 *
 * - Focus goes to the close button as the menu opens. Safari decides what can take focus
 *   before it shows a dialog that was hidden while closed, so on its own it gives none.
 * - Tab wraps from the menu's last control to its first, and Shift+Tab back. A dialog on its own
 *   lets focus leave for the browser's toolbar.
 * - Following a link from the menu closes it as the close button does, and the slide carries on
 *   across the change of page. The next page shows the menu as it was left, then closes it with
 *   the same transitions, started at the moment of the click.
 */
(() => {
    const root = document.documentElement;
    const noteKey = "menu-closed-at";
    /** The sheet's slide in MobileMenu.astro; after this long, the menu has already closed. */
    const slideLength = 500;
    const findMenu = () => document.getElementById("menu");

    const focusCloseButton = () => {
        const menu = findMenu();
        if (menu?.open && !menu.contains(document.activeElement)) menu.querySelector("[autofocus]")?.focus();
    };

    /** Past either end, focus wraps round; and if a browser lets it leave the menu anyway, it comes back. */
    const wrapFocus = (event) => {
        const menu = findMenu();
        if (event.key !== "Tab" || !menu?.open) return;
        const controls = [...menu.querySelectorAll("a[href], button")].filter((control) => control.checkVisibility());
        const [edge, wrapTo] = event.shiftKey ? [controls[0], controls.at(-1)] : [controls.at(-1), controls[0]];
        if (document.activeElement === edge || !menu.contains(document.activeElement)) {
            event.preventDefault();
            return wrapTo?.focus();
        }
        setTimeout(() => menu.open && !menu.contains(document.activeElement) && wrapTo?.focus());
    };

    const isPlainSameSiteClick = (event, link) =>
        event.button === 0 &&
        !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) &&
        link.target === "" &&
        !link.hasAttribute("download") &&
        link.origin === location.origin;

    const closeForLink = (event) => {
        const link = event.target.closest("#menu[open] a[href]");
        if (link === null || !isPlainSameSiteClick(event, link)) return;
        findMenu().close();
        sessionStorage.setItem(noteKey, String(Date.now()));
    };

    /**
     * On the first frame, before anything is painted, the open look is taken away. Measuring the
     * menu first makes sure that look was applied, so taking it away starts the transitions; each is
     * then dated from the click, so the slide shows the point it has really reached.
     */
    const finishClosing = (closedAt) => {
        if (findMenu() === null) return requestAnimationFrame(() => finishClosing(closedAt));
        findMenu().getBoundingClientRect();
        delete root.dataset.menuWasOpen;
        for (const transition of document.getAnimations()) {
            if (transition.effect?.target?.closest('#menu, [commandfor="menu"]')) {
                transition.startTime = closedAt - performance.timeOrigin;
            }
        }
    };

    const resumeClosing = () => {
        const closedAt = Number(sessionStorage.getItem(noteKey));
        sessionStorage.removeItem(noteKey);
        if (closedAt === 0 || Date.now() - closedAt >= slideLength) return;
        root.dataset.menuWasOpen = "";
        requestAnimationFrame(() => finishClosing(closedAt));
    };

    addEventListener("keydown", wrapFocus);
    addEventListener("click", (event) => {
        if (!(event.target instanceof Element)) return;
        if (event.target.closest('[commandfor="menu"][command="show-modal"]')) return void setTimeout(focusCloseButton);
        try {
            closeForLink(event);
        } catch {
            // Storage can be blocked; the link is then simply followed, as it is without script.
        }
    });

    try {
        resumeClosing();
    } catch {
        // Storage can be blocked; the page then simply arrives with the menu closed.
    }
})();

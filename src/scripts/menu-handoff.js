/*
 * The menu is a native dialog and needs no script. This only carries its closing slide across a
 * page load: following a link from the open menu fades its links and leaves a note, and the next
 * page reads the note before its first paint and plays the sheet sliding away.
 */
(() => {
    const root = document.documentElement;
    const noteKey = "menu-leaving";

    try {
        if (sessionStorage.getItem(noteKey) !== null) {
            sessionStorage.removeItem(noteKey);
            root.dataset.menuLeaving = "";
        }
    } catch {
        return;
    }

    const isPlainSameSiteClick = (event, link) =>
        event.button === 0 &&
        !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) &&
        link.target === "" &&
        !link.hasAttribute("download") &&
        link.origin === location.origin;

    addEventListener("click", (event) => {
        const link = event.target instanceof Element ? event.target.closest("#menu[open] a[href]") : null;
        if (link === null || !isPlainSameSiteClick(event, link)) return;
        root.dataset.menuLeaving = "";
        sessionStorage.setItem(noteKey, "");
    });

    addEventListener("animationend", (event) => {
        if (event.target instanceof Element && event.target.matches("#menu:not([open])")) {
            delete root.dataset.menuLeaving;
        }
    });

    addEventListener("pageshow", (event) => {
        if (!event.persisted) return;
        delete root.dataset.menuLeaving;
        document.getElementById("menu")?.close();
    });
})();

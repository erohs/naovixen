/*
 * Runs in the head before first paint. Marks that script is running, so the theme switch can
 * show, and applies a theme the reader chose earlier. Without a choice, or without script, the
 * page follows the system setting through light-dark() alone.
 */
(() => {
    const root = document.documentElement;
    root.dataset.js = "";

    try {
        const theme = localStorage.getItem("theme");
        if (theme === "light" || theme === "dark") root.dataset.theme = theme;
    } catch {
        return;
    }
})();

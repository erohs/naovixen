type Theme = "light" | "dark";

const root = document.documentElement;
const systemDark = matchMedia("(prefers-color-scheme: dark)");

const currentTheme = (): Theme => {
    const chosen = root.dataset["theme"];
    if (chosen === "light" || chosen === "dark") return chosen;
    return systemDark.matches ? "dark" : "light";
};

const showState = (): void => {
    const isDark = currentTheme() === "dark";
    for (const toggle of document.querySelectorAll("[data-theme-toggle]")) {
        toggle.setAttribute("aria-pressed", String(isDark));
    }
};

const applyTheme = (theme: Theme): void => {
    root.dataset["theme"] = theme;
    try {
        localStorage.setItem("theme", theme);
    } catch {
        // Storage can be blocked; the choice still holds for this page.
    }
    showState();
};

/** Grows the new theme in a circle from the toggle's centre, where view transitions exist. */
const revealFrom = (origin: Element, change: () => void): void => {
    if (!("startViewTransition" in document)) return change();
    const { left, top, width, height } = origin.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.style.setProperty("--reveal-x", `${x}px`);
    root.style.setProperty("--reveal-y", `${y}px`);
    root.style.setProperty("--reveal-radius", `${radius}px`);
    root.dataset["themeReveal"] = "";
    const clear = (): void => {
        ["--reveal-x", "--reveal-y", "--reveal-radius"].forEach((name) => root.style.removeProperty(name));
        delete root.dataset["themeReveal"];
    };
    document.startViewTransition(change).finished.then(clear, clear);
};

/** Pressing a toggle chooses the opposite of the theme showing now, whether chosen or the system's. */
export const connectThemeToggles = (): void => {
    showState();
    systemDark.addEventListener("change", showState);
    for (const toggle of document.querySelectorAll("[data-theme-toggle]")) {
        toggle.addEventListener("click", () => {
            const next: Theme = currentTheme() === "dark" ? "light" : "dark";
            revealFrom(toggle, () => applyTheme(next));
        });
    }
};

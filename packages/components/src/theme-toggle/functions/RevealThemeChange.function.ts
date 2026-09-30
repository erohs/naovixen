import { flushSync } from 'react-dom';

/**
 * Snapshots the page, changes the theme, then lets theme-toggle.css grow the new theme in a
 * circle from the centre of `origin`. Where view transitions are missing it simply changes.
 */
export function revealThemeChange(origin: HTMLElement, changeTheme: () => void): void {
    if (!('startViewTransition' in document)) {
        changeTheme();

        return;
    }

    const { left, top, width, height } = origin.getBoundingClientRect();
    const centreX = left + width / 2;
    const centreY = top + height / 2;
    const radius = Math.hypot(
        Math.max(centreX, innerWidth - centreX),
        Math.max(centreY, innerHeight - centreY),
    );
    const rootStyle = document.documentElement.style;

    rootStyle.setProperty('--theme-toggle-reveal-x', `${String(centreX)}px`);
    rootStyle.setProperty('--theme-toggle-reveal-y', `${String(centreY)}px`);
    rootStyle.setProperty('--theme-toggle-reveal-radius', `${String(radius)}px`);

    document.startViewTransition(() => {
        flushSync(changeTheme);
    });
}

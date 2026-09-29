import { ResolvedTheme } from '../enums/ResolvedTheme';
import { ThemePreference } from '../enums/ThemePreference';
import { darkColorSchemeQuery } from './DarkColorSchemeQuery.const';
import { defaultThemePreference } from './DefaultThemePreference.const';
import { themeCookieName } from './ThemeCookieName.const';

/**
 * Runs inline in `<head>` before first paint, so the page never flashes the wrong theme. It
 * repeats what CookieThemeStorage, resolveTheme and applyThemeAttributes do, because it has to
 * run before any bundle loads. A server can then render every page the same way, which lets
 * static pages be prerendered.
 */
export const themeBootScript = `(() => {
    const cookie = document.cookie.match(/(?:^|; )${themeCookieName}=(${ThemePreference.Light}|${ThemePreference.Dark}|${ThemePreference.System})(?:;|$)/);
    const preference = cookie ? cookie[1] : '${defaultThemePreference}';
    const systemTheme = window.matchMedia('${darkColorSchemeQuery}').matches ? '${ResolvedTheme.Dark}' : '${ResolvedTheme.Light}';
    const resolvedTheme = preference === '${ThemePreference.System}' ? systemTheme : preference;
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    document.documentElement.setAttribute('data-theme-preference', preference);
})();`;

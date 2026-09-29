import { ResolvedTheme } from '../enums/ResolvedTheme';
import type { IThemeState } from '../theme-controller/interfaces/IThemeState';
import { defaultThemePreference } from './DefaultThemePreference.const';

/**
 * What a server render assumes, since it cannot see the reader's cookie or system setting.
 * The browser must hydrate against the same state before switching to the real one.
 */
export const serverRenderedThemeState: IThemeState = {
    preference: defaultThemePreference,
    resolvedTheme: ResolvedTheme.Light,
};

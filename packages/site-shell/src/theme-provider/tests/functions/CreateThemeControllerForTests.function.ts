import type { ThemePreference } from '@naovixen/theming';
import { ResolvedTheme, ThemeController } from '@naovixen/theming';

/**
 * A real controller over in-memory storage and a system that never changes its mind.
 * Specs across this package share it to put a ThemeProvider around what they render.
 */
export function createThemeControllerForTests(
    systemTheme: ResolvedTheme = ResolvedTheme.Light,
): ThemeController {
    let storedPreference: ThemePreference | undefined;

    const storage = {
        readPreference: (): ThemePreference | undefined => storedPreference,
        writePreference: (preference: ThemePreference): void => {
            storedPreference = preference;
        },
    };
    const systemThemeSource = {
        getTheme: (): ResolvedTheme => systemTheme,
        subscribe: (): (() => void) => () => undefined,
    };

    return new ThemeController(storage, systemThemeSource);
}

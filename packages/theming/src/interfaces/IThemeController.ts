import type { ThemePreference } from '../enums/ThemePreference';
import type { IThemeState } from '../theme-controller/interfaces/IThemeState';

/** Properties rather than methods: they must stay bound when handed to useSyncExternalStore. */
export interface IThemeController {
    readonly getState: () => IThemeState;
    /** Returns a function that stops listening. */
    readonly subscribe: (listener: () => void) => () => void;
    readonly setPreference: (preference: ThemePreference) => void;
}

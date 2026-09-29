import type { ThemePreference } from '../enums/ThemePreference';
import type { IThemeStorage } from '../interfaces/IThemeStorage';

/** Remembers nothing, for a server render where there is nowhere to keep a choice. */
export class NoOpThemeStorage implements IThemeStorage {
    public readPreference(): ThemePreference | undefined {
        return undefined;
    }

    public writePreference(): void {
        /* Nothing to write to. */
    }
}

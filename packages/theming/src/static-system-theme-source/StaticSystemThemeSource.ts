import type { ResolvedTheme } from '../enums/ResolvedTheme';
import type { ISystemThemeSource } from '../interfaces/ISystemThemeSource';

/** A system that never changes its mind, for a server render where there is no system to ask. */
export class StaticSystemThemeSource implements ISystemThemeSource {
    private readonly _theme: ResolvedTheme;

    public constructor(theme: ResolvedTheme) {
        this._theme = theme;
    }

    public getTheme(): ResolvedTheme {
        return this._theme;
    }

    public subscribe(): () => void {
        return () => undefined;
    }
}

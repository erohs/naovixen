import { ResolvedTheme } from '../enums/ResolvedTheme';
import type { ISystemThemeSource } from '../interfaces/ISystemThemeSource';
import { darkColorSchemeQuery } from '../constants/DarkColorSchemeQuery.const';
import type { IMediaQueryList } from './interfaces/IMediaQueryList';
import type { MatchMedia } from './types/MatchMedia';

/** Browser only. Pass `(query) => window.matchMedia(query)`. */
export class MediaQuerySystemThemeSource implements ISystemThemeSource {
    private readonly _darkColorScheme: IMediaQueryList;

    public constructor(matchMedia: MatchMedia) {
        this._darkColorScheme = matchMedia(darkColorSchemeQuery);
    }

    public getTheme(): ResolvedTheme {
        return this._darkColorScheme.matches ? ResolvedTheme.Dark : ResolvedTheme.Light;
    }

    public subscribe(listener: () => void): () => void {
        this._darkColorScheme.addEventListener('change', listener);

        return () => {
            this._darkColorScheme.removeEventListener('change', listener);
        };
    }
}

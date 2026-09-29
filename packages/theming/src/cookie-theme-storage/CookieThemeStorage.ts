import type { ThemePreference } from '../enums/ThemePreference';
import type { IThemeStorage } from '../interfaces/IThemeStorage';
import { themeCookieName } from './constants/ThemeCookieName.const';
import { isThemePreference } from './functions/IsThemePreference.function';
import type { ICookieStore } from './interfaces/ICookieStore';

/** A cookie rather than local storage, so the server can render the right theme first time. */
export class CookieThemeStorage implements IThemeStorage {
  private readonly _cookieStore: ICookieStore;

  public constructor(cookieStore: ICookieStore) {
    this._cookieStore = cookieStore;
  }

  /** A tampered or outdated cookie reads as no preference rather than failing. */
  public readPreference(): ThemePreference | undefined {
    const storedValue = this._cookieStore.read(themeCookieName);

    return isThemePreference(storedValue) ? storedValue : undefined;
  }

  public writePreference(preference: ThemePreference): void {
    this._cookieStore.write(themeCookieName, preference);
  }
}

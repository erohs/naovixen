import type { ThemePreference } from '../enums/ThemePreference';

export interface IThemeStorage {
  readPreference(): ThemePreference | undefined;
  writePreference(preference: ThemePreference): void;
}

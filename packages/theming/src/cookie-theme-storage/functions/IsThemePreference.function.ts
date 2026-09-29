import { ThemePreference } from '../../enums/ThemePreference';

export function isThemePreference(value: string | undefined): value is ThemePreference {
  return Object.values<string | undefined>(ThemePreference).includes(value);
}

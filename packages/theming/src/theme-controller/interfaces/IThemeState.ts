import type { ResolvedTheme } from '../../enums/ResolvedTheme';
import type { ThemePreference } from '../../enums/ThemePreference';

export interface IThemeState {
  readonly preference: ThemePreference;
  readonly resolvedTheme: ResolvedTheme;
}

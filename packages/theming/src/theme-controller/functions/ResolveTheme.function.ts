import { ResolvedTheme } from '../../enums/ResolvedTheme';
import { ThemePreference } from '../../enums/ThemePreference';

export function resolveTheme(
  preference: ThemePreference,
  systemTheme: ResolvedTheme,
): ResolvedTheme {
  switch (preference) {
    case ThemePreference.Light:
      return ResolvedTheme.Light;
    case ThemePreference.Dark:
      return ResolvedTheme.Dark;
    case ThemePreference.System:
      return systemTheme;
  }
}

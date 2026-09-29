import type { ResolvedTheme } from '../enums/ResolvedTheme';

export interface ISystemThemeSource {
  getTheme(): ResolvedTheme;
  /** Returns a function that stops listening. */
  subscribe(listener: () => void): () => void;
}

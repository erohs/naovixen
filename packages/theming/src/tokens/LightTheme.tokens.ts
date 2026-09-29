import type { IColorTheme } from '../interfaces/IColorTheme';
import { palette } from './Palette.tokens';

export const lightTheme: IColorTheme = {
  '--color-background-page': palette.cream,
  '--color-background-surface': palette.sand,
  '--color-background-accent': palette.orange,
  '--color-text-primary': palette.ink,
  '--color-text-secondary': palette.plumGrey,
  '--color-text-accent': palette.burntOrange,
  '--color-text-error': palette.brickRed,
  '--color-text-on-accent': palette.ink,
  '--color-border': palette.ink,
  '--color-shadow': palette.ink,
  '--color-focus': palette.deepPlum,
  '--color-decoration-dots': palette.lavender,
  '--color-decoration-paw': palette.coral,
  // Pale fur and highlights on doodles, which stay light whatever the theme.
  '--color-decoration-highlight': palette.cream,
};

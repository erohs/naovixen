import type { IColorTheme } from '../interfaces/IColorTheme';
import { palette } from './Palette.tokens';

export const darkTheme: IColorTheme = {
  '--color-background-page': palette.espresso,
  '--color-background-surface': palette.cocoa,
  '--color-background-accent': palette.orange,
  '--color-text-primary': palette.cream,
  '--color-text-secondary': palette.wheat,
  '--color-text-accent': palette.orange,
  '--color-text-error': palette.salmon,
  '--color-text-on-accent': palette.ink,
  '--color-border': palette.cream,
  '--color-shadow': palette.cream,
  '--color-focus': palette.lilac,
  '--color-decoration-dots': palette.lavender,
  '--color-decoration-paw': palette.coral,
};

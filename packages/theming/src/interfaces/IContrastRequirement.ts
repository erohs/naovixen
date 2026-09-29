import type { IColorTheme } from './IColorTheme';

export interface IContrastRequirement {
    readonly foreground: keyof IColorTheme;
    readonly background: keyof IColorTheme;
    readonly minimumRatio: number;
}

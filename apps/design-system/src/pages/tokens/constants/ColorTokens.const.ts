import { lightTheme } from "@naovixen/theming";

export const colorTokens = Object.keys(lightTheme) as (keyof typeof lightTheme)[];

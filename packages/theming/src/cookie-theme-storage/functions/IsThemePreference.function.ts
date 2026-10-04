import { ThemePreference } from "../../enums/ThemePreference";

export const isThemePreference = (value: string | undefined): value is ThemePreference =>
    Object.values<string | undefined>(ThemePreference).includes(value);

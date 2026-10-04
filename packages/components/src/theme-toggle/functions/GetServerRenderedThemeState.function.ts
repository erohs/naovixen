import { serverRenderedThemeState } from "@naovixen/theming";
import type { IThemeState } from "@naovixen/theming";

export const getServerRenderedThemeState = (): IThemeState => serverRenderedThemeState;

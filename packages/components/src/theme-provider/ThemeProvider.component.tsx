import type { FunctionComponent } from 'react';

import { ThemeControllerContext } from './constants/ThemeControllerContext.context';
import type { IThemeProviderProps } from './interfaces/IThemeProviderProps';

/** Hands the theme controller to `useTheme`, `useThemeController` and the ThemeToggle below. */
export const ThemeProvider: FunctionComponent<IThemeProviderProps> = ({
    themeController,
    children,
}) => <ThemeControllerContext value={themeController}>{children}</ThemeControllerContext>;

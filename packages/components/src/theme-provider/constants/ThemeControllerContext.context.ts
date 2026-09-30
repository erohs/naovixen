import { createContext } from 'react';
import type { IThemeController } from '@naovixen/theming';

export const ThemeControllerContext = createContext<IThemeController | undefined>(undefined);

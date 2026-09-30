import type { ReactNode } from 'react';
import type { IThemeController } from '@naovixen/theming';

export interface IThemeProviderProps {
    readonly themeController: IThemeController;
    readonly children: ReactNode;
}

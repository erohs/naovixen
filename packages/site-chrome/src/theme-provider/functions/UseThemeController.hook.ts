import { useContext } from 'react';
import type { IThemeController } from '@naovixen/theming';

import { ThemeControllerContext } from '../constants/ThemeControllerContext.context';

export function useThemeController(): IThemeController {
  const themeController = useContext(ThemeControllerContext);

  if (!themeController) {
    throw new Error('useThemeController needs a NaovixenProvider above it.');
  }

  return themeController;
}

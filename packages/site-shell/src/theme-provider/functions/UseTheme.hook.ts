import { useSyncExternalStore } from 'react';
import type { IThemeState } from '@naovixen/theming';

import { useThemeController } from './UseThemeController.hook';

export function useTheme(): IThemeState {
    const themeController = useThemeController();

    return useSyncExternalStore(
        themeController.subscribe,
        themeController.getState,
        themeController.getState,
    );
}

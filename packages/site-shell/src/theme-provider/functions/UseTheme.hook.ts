import { useSyncExternalStore } from 'react';
import type { IThemeState } from '@naovixen/theming';
import { serverRenderedThemeState } from '@naovixen/theming';

import { useThemeController } from './UseThemeController.hook';

function getServerRenderedThemeState(): IThemeState {
    return serverRenderedThemeState;
}

/** Hydrates against what the server rendered, then moves to the reader's real theme. */
export function useTheme(): IThemeState {
    const themeController = useThemeController();

    return useSyncExternalStore(
        themeController.subscribe,
        themeController.getState,
        getServerRenderedThemeState,
    );
}

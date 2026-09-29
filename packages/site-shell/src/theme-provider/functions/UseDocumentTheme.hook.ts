import { useEffect } from 'react';
import { applyThemeAttributes } from '@naovixen/theming';

import { useThemeController } from './UseThemeController.hook';

/** Keeps `<html>` on the controller's theme. Call it once, near the root, below a ThemeProvider. */
export function useDocumentTheme(): void {
    const themeController = useThemeController();

    useEffect(() => {
        const applyToDocument = (): void => {
            applyThemeAttributes(themeController.getState(), document.documentElement);
        };

        applyToDocument();

        return themeController.subscribe(applyToDocument);
    }, [themeController]);
}

import { createIsomorphicFn } from '@tanstack/react-start';
import type { IThemeController } from '@naovixen/theming';
import {
    CookieThemeStorage,
    MediaQuerySystemThemeSource,
    NoOpThemeStorage,
    ResolvedTheme,
    StaticSystemThemeSource,
    ThemeController,
} from '@naovixen/theming';

import { DocumentCookieStore } from '../services/document-cookie-store/DocumentCookieStore';

/**
 * The server never sees the reader's theme: the boot script sets it before first paint. So the
 * server's controller only has to match the state `useTheme` hydrates against.
 */
export const createThemeController = createIsomorphicFn()
    .server(
        (): IThemeController =>
            new ThemeController(
                new NoOpThemeStorage(),
                new StaticSystemThemeSource(ResolvedTheme.Light),
            ),
    )
    .client(
        (): IThemeController =>
            new ThemeController(
                new CookieThemeStorage(new DocumentCookieStore()),
                new MediaQuerySystemThemeSource((query) => window.matchMedia(query)),
            ),
    );

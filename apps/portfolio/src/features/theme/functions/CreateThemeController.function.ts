import { createIsomorphicFn } from "@tanstack/react-start";
import type { IThemeController } from "@naovixen/theming";
import {
    applyThemeAttributes,
    CookieThemeStorage,
    MediaQuerySystemThemeSource,
    NoOpThemeStorage,
    ResolvedTheme,
    StaticSystemThemeSource,
    ThemeController,
} from "@naovixen/theming";
import { DocumentCookieStore } from "../document-cookie-store/DocumentCookieStore";

const createDocumentThemeController = (): IThemeController => {
    const themeController = new ThemeController(
        new CookieThemeStorage(new DocumentCookieStore()),
        new MediaQuerySystemThemeSource((query) => window.matchMedia(query)),
    );
    themeController.subscribe(() => {
        applyThemeAttributes(themeController.getState(), document.documentElement);
    });

    return themeController;
};

/**
 * The server never sees the reader's theme: the boot script sets it on `<html>` before first paint, and
 * the browser's controller keeps it there for the life of the page.
 */
export const createThemeController = createIsomorphicFn()
    .server(
        (): IThemeController =>
            new ThemeController(new NoOpThemeStorage(), new StaticSystemThemeSource(ResolvedTheme.Light)),
    )
    .client(createDocumentThemeController);

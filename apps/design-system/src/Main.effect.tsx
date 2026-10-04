import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    applyThemeAttributes,
    MediaQuerySystemThemeSource,
    NoOpThemeStorage,
    ThemeController,
} from "@naovixen/theming";
import { App } from "./app/App.component";
/** Order matters: theming declares the cascade layers that the other stylesheets are filed into. */
import "@naovixen/theming/styles.css";
import "@naovixen/components/styles.css";
import "@naovixen/rich-content/styles.css";
import "./index.css";

/** The choice lasts until the page reloads: this app has nothing worth remembering. */
const themeController = new ThemeController(
    new NoOpThemeStorage(),
    new MediaQuerySystemThemeSource((query) => window.matchMedia(query)),
);

const applyTheme = (): void => {
    applyThemeAttributes(themeController.getState(), document.documentElement);
};

applyTheme();
themeController.subscribe(applyTheme);

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App themeController={themeController} />
        </StrictMode>,
    );
}

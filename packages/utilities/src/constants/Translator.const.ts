import i18next from "i18next";
import { defaultLocale } from "./DefaultLocale.const";

/**
 * The one i18next instance every package adds its own namespace to, from its `resources/` folder.
 * React escapes text itself, and the XML builders escape theirs, so i18next does not.
 */
export const translator = i18next.createInstance();

/** With `initAsync` off, `init` has finished by the time it returns, so packages can add messages on import. */
void translator.init({
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    initAsync: false,
    interpolation: { escapeValue: false },
});

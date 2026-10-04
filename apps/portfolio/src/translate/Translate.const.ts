import { defaultLocale, translator } from "@naovixen/utilities";
import enGb from "../../resources/en-GB.json";

declare module "i18next" {
    interface ResourceNamespaceMap {
        portfolio: typeof enGb;
    }
}

translator.addResourceBundle(defaultLocale, "portfolio", enGb);

export const translate = translator.getFixedT(null, "portfolio");

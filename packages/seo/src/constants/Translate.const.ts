import { defaultLocale, translator } from "@naovixen/utilities";
import enGb from "../../resources/en-GB.json";

declare module "i18next" {
    interface ResourceNamespaceMap {
        seo: typeof enGb;
    }
}

translator.addResourceBundle(defaultLocale, "seo", enGb);

export const translate = translator.getFixedT(null, "seo");

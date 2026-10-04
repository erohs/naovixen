import { defaultLocale, translator } from "@naovixen/utilities";
import enGb from "../../resources/en-GB.json";

declare module "i18next" {
    interface ResourceNamespaceMap {
        components: typeof enGb;
    }
}

translator.addResourceBundle(defaultLocale, "components", enGb);

export const translate = translator.getFixedT(null, "components");

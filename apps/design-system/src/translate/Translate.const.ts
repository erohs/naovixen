import { defaultLocale, translator } from "@naovixen/utilities";
import enGb from "../../resources/en-GB.json";

declare module "i18next" {
    interface ResourceNamespaceMap {
        designSystem: typeof enGb;
    }
}

translator.addResourceBundle(defaultLocale, "designSystem", enGb);

export const translate = translator.getFixedT(null, "designSystem");

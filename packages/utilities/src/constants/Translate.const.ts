import enGb from "../../resources/en-GB.json";
import { defaultLocale } from "./DefaultLocale.const";
import { translator } from "./Translator.const";

declare module "i18next" {
    interface ResourceNamespaceMap {
        utilities: typeof enGb;
    }
}

translator.addResourceBundle(defaultLocale, "utilities", enGb);

export const translate = translator.getFixedT(null, "utilities");

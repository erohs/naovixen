import { translate } from "../constants/Translate.const";

/** A title that already names the site, as the home page's does, is used as it is. */
export const buildDocumentTitle = (pageTitle: string, siteName: string): string => {
    if (pageTitle.includes(siteName)) {
        return pageTitle;
    }

    return translate("documentTitle", { page: pageTitle, site: siteName });
};

import type { IDesignSystemPage } from "../interfaces/IDesignSystemPage";
import { ActionsAndLinksPage } from "../../pages/actions-and-links/ActionsAndLinksPage.component";
import { ContentPage } from "../../pages/content/ContentPage.component";
import { RichContentPage } from "../../pages/rich-content/RichContentPage.component";
import { SiteFramePage } from "../../pages/site-frame/SiteFramePage.component";
import { TextAndMediaPage } from "../../pages/text-and-media/TextAndMediaPage.component";
import { TokensPage } from "../../pages/tokens/TokensPage.component";
import { translate } from "../../translate/Translate.const";

/**
 * In reading order: the tokens everything is built from, then the components grouped by what
 * they are for, then what a CMS body renders as.
 */
export const designSystemPages: readonly IDesignSystemPage[] = [
    { id: "tokens", title: translate("pages.tokens"), component: TokensPage },
    { id: "actions-and-links", title: translate("pages.actionsAndLinks"), component: ActionsAndLinksPage },
    { id: "text-and-media", title: translate("pages.textAndMedia"), component: TextAndMediaPage },
    { id: "content", title: translate("pages.content"), component: ContentPage },
    { id: "site-frame", title: translate("pages.siteFrame"), component: SiteFramePage },
    { id: "rich-content", title: translate("pages.richContent"), component: RichContentPage },
];

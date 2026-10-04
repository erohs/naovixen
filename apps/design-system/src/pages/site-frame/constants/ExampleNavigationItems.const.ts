import type { ILink } from "@naovixen/components";
import { translate } from "../../../translate/Translate.const";

export const exampleNavigationItems: readonly ILink[] = [
    { label: translate("siteFrame.home"), href: "/" },
    { label: translate("siteFrame.about"), href: "/about" },
    { label: translate("siteFrame.blog"), href: "/blog" },
];

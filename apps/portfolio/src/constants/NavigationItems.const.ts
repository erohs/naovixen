import type { ILink } from "@naovixen/components";
import { translate } from "../translate/Translate.const";

export const navigationItems: readonly ILink[] = [
    { label: translate("navigation.home"), href: "/" },
    { label: translate("navigation.work"), href: "/work" },
    { label: translate("navigation.about"), href: "/about" },
    { label: translate("navigation.blog"), href: "/blog" },
    { label: translate("navigation.contact"), href: "/contact" },
];

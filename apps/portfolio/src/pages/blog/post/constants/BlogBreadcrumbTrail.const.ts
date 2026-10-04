import type { ILink } from "@naovixen/components";
import { homeBreadcrumbTrail } from "../../../../features/site/constants/HomeBreadcrumbTrail.const";
import { translate } from "../../../../translate/Translate.const";

export const blogBreadcrumbTrail: readonly ILink[] = [
    ...homeBreadcrumbTrail,
    { label: translate("navigation.blog"), href: "/blog" },
];

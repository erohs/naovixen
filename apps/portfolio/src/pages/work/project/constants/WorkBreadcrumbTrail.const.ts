import type { ILink } from "@naovixen/components";
import { homeBreadcrumbTrail } from "../../../../features/site/constants/HomeBreadcrumbTrail.const";
import { translate } from "../../../../translate/Translate.const";

export const workBreadcrumbTrail: readonly ILink[] = [
    ...homeBreadcrumbTrail,
    { label: translate("navigation.work"), href: "/work" },
];

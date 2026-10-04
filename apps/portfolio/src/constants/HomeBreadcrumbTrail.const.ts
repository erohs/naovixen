import type { ILink } from "@naovixen/components";
import { translate } from "../translate/Translate.const";

export const homeBreadcrumbTrail: readonly ILink[] = [{ label: translate("navigation.home"), href: "/" }];

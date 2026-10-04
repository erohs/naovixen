import type { FunctionComponent } from "react";
import { arrowRightIcon, Link, LinkVariant } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import type { INextLinkProps } from "./interfaces/INextLinkProps";

export const NextLink: FunctionComponent<INextLinkProps> = ({ link }) => (
    <Link href={link.href} variant={LinkVariant.Standalone} className="nv-more-navigation__next">
        {translate("moreNavigation.next", { title: link.label })} <Link.Icon source={arrowRightIcon} />
    </Link>
);

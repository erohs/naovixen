import type { FunctionComponent } from "react";
import { arrowLeftIcon, arrowRightIcon, Link } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import { AdjacentDirection } from "./enums/AdjacentDirection";
import type { IAdjacentLinkProps } from "./interfaces/IAdjacentLinkProps";

/** A small "Previous" or "Next" above the title, with an arrow on the side it points to. */
export const AdjacentLink: FunctionComponent<IAdjacentLinkProps> = ({ link, direction }) => {
    const isPrevious = direction === AdjacentDirection.Previous;

    return (
        <Link href={link.href} className={`nv-more-navigation__adjacent nv-more-navigation__adjacent--${direction}`}>
            <span className="nv-more-navigation__direction">{translate(`moreNavigation.${direction}`)}</span>{" "}
            <span className="nv-more-navigation__title">
                {isPrevious && <Link.Icon source={arrowLeftIcon} />}
                {link.label}
                {!isPrevious && <Link.Icon source={arrowRightIcon} />}
            </span>
        </Link>
    );
};

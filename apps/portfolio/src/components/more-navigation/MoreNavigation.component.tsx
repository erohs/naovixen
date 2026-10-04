import type { FunctionComponent } from "react";
import { arrowLeftIcon, Link, LinkVariant } from "@naovixen/components";
import { joinClassNames } from "@naovixen/utilities";
import { AdjacentLink } from "./AdjacentLink.component";
import { AdjacentDirection } from "./enums/AdjacentDirection";
import type { IMoreNavigationProps } from "./interfaces/IMoreNavigationProps";

/** Back to the list, then the reads either side of this one, where there are any. */
export const MoreNavigation: FunctionComponent<IMoreNavigationProps> = ({
    label,
    backLink,
    previousLink,
    nextLink,
    className,
    ...navProps
}) => (
    <nav {...navProps} aria-label={label} className={joinClassNames("nv-more-navigation", className)}>
        <Link href={backLink.href} variant={LinkVariant.Standalone}>
            <Link.Icon source={arrowLeftIcon} /> {backLink.label}
        </Link>
        <div className="nv-more-navigation__adjacent-links">
            {previousLink && <AdjacentLink link={previousLink} direction={AdjacentDirection.Previous} />}
            {nextLink && <AdjacentLink link={nextLink} direction={AdjacentDirection.Next} />}
        </div>
    </nav>
);

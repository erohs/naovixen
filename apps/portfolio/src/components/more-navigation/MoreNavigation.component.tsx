import type { FunctionComponent } from "react";
import { arrowLeftIcon, Link, LinkVariant } from "@naovixen/components";
import { joinClassNames } from "@naovixen/utilities";
import type { IMoreNavigationProps } from "./interfaces/IMoreNavigationProps";
import { NextLink } from "./NextLink.component";

/** Back to the list at one end and, where there is one, the next read at the other. */
export const MoreNavigation: FunctionComponent<IMoreNavigationProps> = ({
    label,
    backLink,
    nextLink,
    className,
    ...navProps
}) => (
    <nav {...navProps} aria-label={label} className={joinClassNames("nv-more-navigation", className)}>
        <Link href={backLink.href} variant={LinkVariant.Standalone}>
            <Link.Icon source={arrowLeftIcon} /> {backLink.label}
        </Link>
        {nextLink && <NextLink link={nextLink} />}
    </nav>
);

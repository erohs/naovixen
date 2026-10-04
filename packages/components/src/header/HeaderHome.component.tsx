import type { FunctionComponent } from "react";
import { Link } from "../link/Link.component";
import { isCurrentHref } from "../navigation-list/functions/IsCurrentHref.function";
import type { HeaderHomeProps } from "./types/HeaderHomeProps";

/** The logo linking home. Its name is the logo's visible text, so voice control finds it. */
export const HeaderHome: FunctionComponent<HeaderHomeProps> = ({ logo, currentHref }) => (
    <Link href="/" aria-current={isCurrentHref(currentHref, "/") ? "page" : undefined} className="nv-header__home">
        {logo}
    </Link>
);

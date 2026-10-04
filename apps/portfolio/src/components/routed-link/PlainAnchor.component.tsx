import type { FunctionComponent } from "react";
import type { AnchorProps } from "@naovixen/components";

/** The anchor the router drives. `Link` has already given it the site's look. */
export const PlainAnchor: FunctionComponent<AnchorProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps}>{children}</a>
);

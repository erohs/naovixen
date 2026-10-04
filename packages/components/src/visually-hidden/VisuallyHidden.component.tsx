import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { VisuallyHiddenProps } from "./types/VisuallyHiddenProps";

/**
 * Text for screen readers only. It takes no part in layout, but a space written before it is ordinary
 * text and does, so a space that separates it from the words before goes inside it:
 * `Full CV<VisuallyHidden> (PDF)</VisuallyHidden>`.
 */
export const VisuallyHidden: FunctionComponent<VisuallyHiddenProps> = ({ className, children, ...spanProps }) => (
    <span {...spanProps} className={joinClassNames("nv-visually-hidden", className)}>
        {children}
    </span>
);

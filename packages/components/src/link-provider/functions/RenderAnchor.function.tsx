import type { ReactNode } from "react";
import type { AnchorProps } from "../types/AnchorProps";

/** The plain anchor a page link falls back to where no app has provided its own. */
export const renderAnchor = ({ children, ...anchorProps }: AnchorProps): ReactNode => (
    <a {...anchorProps}>{children}</a>
);

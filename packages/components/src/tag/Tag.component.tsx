import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { TagProps } from "./types/TagProps";

export const Tag: FunctionComponent<TagProps> = ({ className, children, ...spanProps }) => (
    <span {...spanProps} className={joinClassNames("nv-tag", className)}>
        {children}
    </span>
);

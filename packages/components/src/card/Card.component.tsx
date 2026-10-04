import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { CardProps } from "./types/CardProps";

export const Card: FunctionComponent<CardProps> = ({ className, children, ...articleProps }) => (
    <article {...articleProps} className={joinClassNames("nv-card", className)}>
        {children}
    </article>
);

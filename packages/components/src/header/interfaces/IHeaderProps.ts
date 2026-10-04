import type { ComponentPropsWithRef, ReactNode } from "react";
import type { ILink } from "../../link/interfaces/ILink";

export interface IHeaderProps extends Omit<ComponentPropsWithRef<"header">, "children"> {
    /** The site's name or wordmark, which links home. Its text is the link's name. */
    readonly logo: ReactNode;
    readonly items: readonly ILink[];
    /** The path being shown: it marks the current item, and leaving it closes the menu. */
    readonly currentHref: string;
    /** Controls at the end of the row, such as a theme toggle. */
    readonly actions?: ReactNode;
    /** Beneath the links in the narrow-screen menu, such as ways to get in touch. */
    readonly menuFooter?: ReactNode;
}

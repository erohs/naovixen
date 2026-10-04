import type { ComponentPropsWithRef } from "react";
import type { ILink } from "@naovixen/components";

export interface IMoreNavigationProps extends Omit<ComponentPropsWithRef<"nav">, "children" | "aria-label"> {
    /** Names the landmark, such as "More posts". */
    readonly label: string;
    readonly backLink: ILink;
    /** Missing on the first item. */
    readonly previousLink?: ILink | undefined;
    /** Missing on the last item. */
    readonly nextLink?: ILink | undefined;
}

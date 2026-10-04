import type { ILink } from "@naovixen/components";
import type { AdjacentDirection } from "../enums/AdjacentDirection";

export interface IAdjacentLinkProps {
    readonly link: ILink;
    readonly direction: AdjacentDirection;
}

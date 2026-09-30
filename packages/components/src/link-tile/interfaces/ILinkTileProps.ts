import type { ComponentType, ReactNode } from 'react';
import type { LinkProps } from '../../link/types/LinkProps';

export interface ILinkTileProps extends Omit<LinkProps, 'children'> {
    readonly label: ReactNode;
    /** A second line under the label, such as a handle or an address. */
    readonly detail: ReactNode;
    /** An icon source shown in a disc before the label, such as `gitHubIcon`. */
    readonly icon: string;
    /** An icon source at the end that says where the link goes. Defaults to `arrowRightIcon`. */
    readonly trailingIcon?: string | undefined;
    /** Renders the link: `ExternalLink` for another site, a router's link for a page here. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

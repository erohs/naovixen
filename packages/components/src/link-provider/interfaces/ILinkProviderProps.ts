import type { ComponentType, ReactNode } from 'react';

import type { LinkProps } from '../../link/types/LinkProps';

export interface ILinkProviderProps {
    /**
     * Renders a link to a page on this site, usually a router's link wrapped with
     * `createLink`. It receives the anchor's props, `href` included, and must render an `<a>`.
     */
    readonly linkComponent: ComponentType<LinkProps>;
    readonly children: ReactNode;
}

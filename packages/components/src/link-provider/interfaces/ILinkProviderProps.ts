import type { ComponentType, ReactNode } from 'react';

import type { AnchorProps } from '../types/AnchorProps';

export interface ILinkProviderProps {
    /**
     * Renders a link to a page on this site, usually a router's link wrapped with
     * `createLink`. It receives the anchor's props, `href` included, and must render an `<a>`.
     */
    readonly linkComponent: ComponentType<AnchorProps>;
    readonly children: ReactNode;
}

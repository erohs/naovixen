import { useCallback } from 'react';
import type { FunctionComponent } from 'react';

import type { LinkProps } from '../link/types/LinkProps';
import { PageLinkContext } from './constants/PageLinkContext.context';
import type { ILinkProviderProps } from './interfaces/ILinkProviderProps';

/**
 * Hands the app's link component to every `Link` below it, and so to everything built on
 * `Link`: buttons, icons, navigation, cards. Render it once, near the root.
 */
export const LinkProvider: FunctionComponent<ILinkProviderProps> = ({
    linkComponent,
    children,
}) => {
    const LinkComponent = linkComponent;
    const renderPageLink = useCallback(
        (props: LinkProps) => <LinkComponent {...props} />,
        [LinkComponent],
    );

    return <PageLinkContext value={renderPageLink}>{children}</PageLinkContext>;
};

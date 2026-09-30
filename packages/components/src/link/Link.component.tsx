import { use } from 'react';
import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { PageLinkContext } from '../link-provider/constants/PageLinkContext.context';
import { isPageLink } from './functions/IsPageLink.function';
import type { LinkProps } from './types/LinkProps';

/**
 * A styled anchor. A link to a page on this site renders through the component a
 * `LinkProvider` above supplies, so a router can navigate without a full load; every other
 * link, and every link where no provider is present, is a plain anchor.
 */
export const Link: FunctionComponent<LinkProps> = ({ className, children, ...anchorProps }) => {
    const renderPageLink = use(PageLinkContext);
    const linkProps = { ...anchorProps, className: joinClassNames('nv-link', className) };

    return isPageLink(anchorProps) ? (
        renderPageLink({ ...linkProps, children })
    ) : (
        <a {...linkProps}>{children}</a>
    );
};

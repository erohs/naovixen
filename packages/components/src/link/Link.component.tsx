import { use } from 'react';
import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { PageLinkContext } from '../link-provider/constants/PageLinkContext.context';
import { renderAnchor } from '../link-provider/functions/RenderAnchor.function';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import { defaultNewTabHint } from './constants/DefaultNewTabHint.const';
import { linkClassNameByVariant } from './constants/LinkClassNameByVariant.const';
import { LinkVariant } from './enums/LinkVariant';
import { isOtherSite } from './functions/IsOtherSite.function';
import { isPageLink } from './functions/IsPageLink.function';
import type { ILinkProps } from './interfaces/ILinkProps';
import { LinkIcon } from './LinkIcon.component';

const LinkRoot: FunctionComponent<ILinkProps> = ({
    variant = LinkVariant.Content,
    opensInNewTab,
    newTabHint = defaultNewTabHint,
    className,
    children,
    ...anchorProps
}) => {
    const renderPageLink = use(PageLinkContext);
    const linkClassName = joinClassNames(linkClassNameByVariant[variant], className);

    if (opensInNewTab ?? isOtherSite(anchorProps.href)) {
        return (
            <a {...anchorProps} className={linkClassName} target="_blank" rel="noopener noreferrer">
                {children}
                <VisuallyHidden> {newTabHint}</VisuallyHidden>
            </a>
        );
    }

    const renderLink = isPageLink(anchorProps) ? renderPageLink : renderAnchor;

    return renderLink({ ...anchorProps, className: linkClassName, children });
};

/**
 * The one link. Its children are its text and, on either side of it, a `Link.Icon`. A page on
 * this site renders through the component a `LinkProvider` above supplies, so a router can
 * navigate without a full load. Another site opens in a new tab, says so, and is not handed this
 * window. Everything else is a plain anchor.
 */
export const Link = Object.assign(LinkRoot, { Icon: LinkIcon });

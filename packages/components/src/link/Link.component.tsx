import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { LinkProps } from './types/LinkProps';

/**
 * A styled anchor that passes every prop and its ref through, so a router can wrap it:
 * TanStack Router's `createLink(Link)` gives a typed router link with this look.
 */
export const Link: FunctionComponent<LinkProps> = ({ className, children, ...anchorProps }) => (
    <a {...anchorProps} className={joinClassNames('nx-link', className)}>
        {children}
    </a>
);

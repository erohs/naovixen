import type { ReactNode } from 'react';

import type { LinkProps } from '../../link/types/LinkProps';

/** The plain anchor a page link falls back to where no app has provided its own. */
export function renderAnchor({ children, ...anchorProps }: LinkProps): ReactNode {
    return <a {...anchorProps}>{children}</a>;
}

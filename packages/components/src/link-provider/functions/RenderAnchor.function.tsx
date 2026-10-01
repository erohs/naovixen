import type { ReactNode } from 'react';

import type { AnchorProps } from '../types/AnchorProps';

/** The plain anchor a page link falls back to where no app has provided its own. */
export function renderAnchor({ children, ...anchorProps }: AnchorProps): ReactNode {
    return <a {...anchorProps}>{children}</a>;
}

import type { ReactNode } from 'react';

import type { ISiteFooterDirectoryProps } from '../../site-footer-directory/interfaces/ISiteFooterDirectoryProps';
import type { ISiteFooterLegalProps } from '../../site-footer-legal/interfaces/ISiteFooterLegalProps';

export interface ISiteFooterProps extends ISiteFooterDirectoryProps, ISiteFooterLegalProps {
    /** Decoration drawn peeking over the footer's top edge, such as the fox. */
    readonly mascot?: ReactNode | undefined;
}

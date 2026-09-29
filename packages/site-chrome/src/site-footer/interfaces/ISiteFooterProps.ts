import type { ReactNode } from 'react';
import type { INavigationItem, ISocialLink } from '@naovixen/models';

import type { ISiteFooterLegalProps } from '../../site-footer-legal/interfaces/ISiteFooterLegalProps';

export interface ISiteFooterProps extends ISiteFooterLegalProps {
  readonly navigationItems: readonly INavigationItem[];
  readonly socialLinks: readonly ISocialLink[];
  /** One line about the site, beside the wordmark. */
  readonly blurb: string;
  /** Decoration drawn peeking over the footer's top edge, such as the fox. */
  readonly mascot?: ReactNode | undefined;
}

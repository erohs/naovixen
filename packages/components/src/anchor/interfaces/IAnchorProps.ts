import type { ReactNode } from 'react';

import type { LinkDestination } from '../../enums/LinkDestination';

export interface IAnchorProps {
  readonly href: string;
  readonly destination?: LinkDestination | undefined;
  readonly isCurrent?: boolean;
  readonly className?: string;
  readonly children: ReactNode;
}

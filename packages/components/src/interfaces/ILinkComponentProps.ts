import type { ReactNode } from 'react';

/** What a router's link must accept to stand in for a plain anchor. */
export interface ILinkComponentProps {
  readonly href: string;
  readonly className?: string | undefined;
  readonly 'aria-current'?: 'page' | undefined;
  readonly children?: ReactNode;
}

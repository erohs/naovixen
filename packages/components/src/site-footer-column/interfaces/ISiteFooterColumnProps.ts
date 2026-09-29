import type { ReactNode } from 'react';

export interface ISiteFooterColumnProps {
  /** Names the column's navigation landmark as well as heading it. */
  readonly heading: string;
  readonly children: ReactNode;
}

import type { ReactNode } from 'react';

export interface ICalloutProps {
  /** A short handwritten label, such as "tip!". */
  readonly kind: string;
  readonly title: string;
  readonly children: ReactNode;
}

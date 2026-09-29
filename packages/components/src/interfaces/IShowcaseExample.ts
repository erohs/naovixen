import type { ReactNode } from 'react';

export interface IShowcaseExample {
  readonly name: string;
  readonly render: () => ReactNode;
}

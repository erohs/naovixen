import type { ReactNode } from 'react';

import type { LayoutElement } from '../../types/LayoutElement';

export interface IContainerProps {
  readonly as?: LayoutElement | undefined;
  readonly children: ReactNode;
}

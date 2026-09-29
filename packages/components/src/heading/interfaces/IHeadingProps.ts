import type { ReactNode } from 'react';

import type { HeadingSize } from '../../enums/HeadingSize';
import type { HeadingLevel } from '../../types/HeadingLevel';

export interface IHeadingProps {
  readonly level: HeadingLevel;
  /** How big it looks, independent of its place in the outline. Defaults to match `level`. */
  readonly size?: HeadingSize | undefined;
  readonly id?: string | undefined;
  readonly children: ReactNode;
}

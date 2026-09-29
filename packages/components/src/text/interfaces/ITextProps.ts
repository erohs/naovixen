import type { ReactNode } from 'react';

import type { TextVariant } from '../enums/TextVariant';
import type { TextElement } from '../types/TextElement';

export interface ITextProps {
  readonly variant?: TextVariant | undefined;
  readonly as?: TextElement | undefined;
  readonly children: ReactNode;
}

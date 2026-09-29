import type { ReactNode } from 'react';

import type { ButtonVariant } from '../enums/ButtonVariant';
import type { IconName } from '../enums/IconName';

/** What a button looks like, shared by the button and the link styled as one. */
export interface IButtonAppearanceProps {
  readonly variant?: ButtonVariant;
  /** Shown after the label. */
  readonly icon?: IconName;
  /** A short aside after the label, such as "PDF". */
  readonly meta?: string;
  readonly children: ReactNode;
}

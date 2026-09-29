import type { FunctionComponent } from 'react';

import { TextVariant } from './enums/TextVariant';
import type { ITextProps } from './interfaces/ITextProps';

export const Text: FunctionComponent<ITextProps> = ({
  variant = TextVariant.Body,
  as = 'p',
  children,
}) => {
  const Element = as;

  return <Element className={`nx-text nx-text--${variant}`}>{children}</Element>;
};

import type { FunctionComponent } from 'react';

import { buildLayoutClassName } from '../functions/BuildLayoutClassName.function';
import type { ILayoutProps } from '../interfaces/ILayoutProps';

/** Children one under another, a space token apart. */
export const Stack: FunctionComponent<ILayoutProps> = ({ as = 'div', gap, children }) => {
  const Element = as;

  return <Element className={buildLayoutClassName('nx-stack', gap)}>{children}</Element>;
};

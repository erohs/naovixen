import type { FunctionComponent } from 'react';

import { buildLayoutClassName } from '../functions/BuildLayoutClassName.function';
import type { ILayoutProps } from '../interfaces/ILayoutProps';

/** Equal columns, as many as fit, dropping to one on narrow screens. */
export const Grid: FunctionComponent<ILayoutProps> = ({ as = 'div', gap, children }) => {
  const Element = as;

  return <Element className={buildLayoutClassName('nx-grid', gap)}>{children}</Element>;
};

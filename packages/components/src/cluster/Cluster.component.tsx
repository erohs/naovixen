import type { FunctionComponent } from 'react';

import { buildLayoutClassName } from '../functions/BuildLayoutClassName.function';
import type { ILayoutProps } from '../interfaces/ILayoutProps';

/** Children in a row that wraps, a space token apart. */
export const Cluster: FunctionComponent<ILayoutProps> = ({ as = 'div', gap, children }) => {
  const Element = as;

  return <Element className={buildLayoutClassName('nx-cluster', gap)}>{children}</Element>;
};

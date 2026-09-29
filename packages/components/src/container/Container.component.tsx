import type { FunctionComponent } from 'react';

import type { IContainerProps } from './interfaces/IContainerProps';

/** Centres its children at the page width, with the page gutter either side. */
export const Container: FunctionComponent<IContainerProps> = ({ as = 'div', children }) => {
  const Element = as;

  return <Element className="nx-container">{children}</Element>;
};

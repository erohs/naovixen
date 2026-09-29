import type { FunctionComponent } from 'react';

import type { IChildrenProps } from '../interfaces/IChildrenProps';

/** Read by screen readers, invisible on screen. */
export const VisuallyHidden: FunctionComponent<IChildrenProps> = ({ children }) => (
  <span className="nx-visually-hidden">{children}</span>
);

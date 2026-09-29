import type { FunctionComponent } from 'react';

import type { ILinkComponentProps } from '../../interfaces/ILinkComponentProps';

/** Stands in for a router's link, marking what it renders so a test can tell. */
export const RouterLinkForTests: FunctionComponent<ILinkComponentProps> = ({
  href,
  className,
  children,
  ...ariaProps
}) => (
  <a href={href} className={className} data-routed="true" {...ariaProps}>
    {children}
  </a>
);

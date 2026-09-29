import { createElement } from 'react';
import type { FunctionComponent } from 'react';

import type { IAnchorProps } from '../anchor/interfaces/IAnchorProps';
import { useLinkComponent } from '../functions/UseLinkComponent.hook';

/** Hands the link to the router, so the page changes without a full reload. */
export const PageAnchor: FunctionComponent<IAnchorProps> = ({
  href,
  isCurrent = false,
  className,
  children,
}) => {
  const routerLink = useLinkComponent();
  const ariaCurrent = isCurrent ? 'page' : undefined;

  return createElement(routerLink, { href, className, 'aria-current': ariaCurrent }, children);
};

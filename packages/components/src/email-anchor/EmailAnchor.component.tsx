import type { FunctionComponent } from 'react';

import type { IAnchorProps } from '../anchor/interfaces/IAnchorProps';

/** A plain anchor: the mail app opens, so a new tab would only leave a blank page behind. */
export const EmailAnchor: FunctionComponent<IAnchorProps> = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

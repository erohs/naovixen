import type { FunctionComponent } from 'react';

import type { IAnchorProps } from '../anchor/interfaces/IAnchorProps';

export const DownloadAnchor: FunctionComponent<IAnchorProps> = ({ href, className, children }) => (
  <a href={href} className={className} download>
    {children}
  </a>
);

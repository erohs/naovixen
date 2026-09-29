import type { FunctionComponent } from 'react';

import { newTabHint } from '../anchor/constants/NewTabHint.const';
import type { IAnchorProps } from '../anchor/interfaces/IAnchorProps';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';

export const ExternalAnchor: FunctionComponent<IAnchorProps> = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children} <VisuallyHidden>{newTabHint}</VisuallyHidden>
  </a>
);

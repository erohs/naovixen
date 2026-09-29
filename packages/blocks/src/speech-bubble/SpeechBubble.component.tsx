import type { FunctionComponent } from 'react';

import { SpeechBubbleTail } from './enums/SpeechBubbleTail';
import type { ISpeechBubbleProps } from './interfaces/ISpeechBubbleProps';

/** The tail is drawn by the stylesheet, so it never reaches the accessibility tree. */
export const SpeechBubble: FunctionComponent<ISpeechBubbleProps> = ({
  tail = SpeechBubbleTail.Bottom,
  children,
}) => (
  <p className="nx-speech-bubble" data-tail={tail}>
    {children}
  </p>
);

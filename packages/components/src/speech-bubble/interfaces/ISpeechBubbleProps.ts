import type { ReactNode } from 'react';

import type { SpeechBubbleTail } from '../enums/SpeechBubbleTail';

export interface ISpeechBubbleProps {
  readonly tail?: SpeechBubbleTail | undefined;
  readonly children: ReactNode;
}

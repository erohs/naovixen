import type { IShowcase } from '../interfaces/IShowcase';
import { SpeechBubble } from './SpeechBubble.component';
import { SpeechBubbleTail } from './enums/SpeechBubbleTail';

export const speechBubbleShowcase: IShowcase = {
  name: 'SpeechBubble',
  examples: [
    { name: 'Tail at the bottom', render: () => <SpeechBubble>Example words</SpeechBubble> },
    {
      name: 'Tail at the top',
      render: () => <SpeechBubble tail={SpeechBubbleTail.Top}>Example words</SpeechBubble>,
    },
    {
      name: 'No tail',
      render: () => <SpeechBubble tail={SpeechBubbleTail.None}>Example words</SpeechBubble>,
    },
  ],
};

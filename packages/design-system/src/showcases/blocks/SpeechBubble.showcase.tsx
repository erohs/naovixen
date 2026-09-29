import { SpeechBubble, SpeechBubbleTail } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

export const speechBubbleShowcase: IShowcase = {
    name: 'SpeechBubble',
    examples: Object.values(SpeechBubbleTail).map((tail) => ({
        name: `Tail: ${tail}`,
        render: () => <SpeechBubble tail={tail}>hello there!</SpeechBubble>,
    })),
};

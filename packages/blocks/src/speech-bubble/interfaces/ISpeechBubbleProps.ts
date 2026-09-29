import type { ComponentPropsWithRef } from 'react';

import type { SpeechBubbleTail } from '../enums/SpeechBubbleTail';

export interface ISpeechBubbleProps extends ComponentPropsWithRef<'p'> {
    readonly tail?: SpeechBubbleTail | undefined;
}

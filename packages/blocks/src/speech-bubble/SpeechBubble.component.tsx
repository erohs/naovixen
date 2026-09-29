import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { SpeechBubbleTail } from './enums/SpeechBubbleTail';
import type { ISpeechBubbleProps } from './interfaces/ISpeechBubbleProps';

/** The tail is drawn by the stylesheet, so it never reaches the accessibility tree. */
export const SpeechBubble: FunctionComponent<ISpeechBubbleProps> = ({
    tail = SpeechBubbleTail.Bottom,
    className,
    ...paragraphProps
}) => (
    <p
        {...paragraphProps}
        className={joinClassNames('nx-speech-bubble', `nx-speech-bubble--tail-${tail}`, className)}
    />
);

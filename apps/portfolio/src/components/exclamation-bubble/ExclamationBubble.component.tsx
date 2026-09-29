import type { FunctionComponent } from 'react';
import { SpeechBubble } from '@naovixen/blocks';
import { MotionLines } from '@naovixen/brand';

import type { IExclamationBubbleProps } from './interfaces/IExclamationBubbleProps';

/** A speech bubble with motion lines beside it, for a greeting said with some energy. */
export const ExclamationBubble: FunctionComponent<IExclamationBubbleProps> = ({ children }) => (
    <div className="nx-exclamation-bubble">
        <SpeechBubble>{children}</SpeechBubble>
        <MotionLines className="nx-exclamation-bubble__lines" />
    </div>
);

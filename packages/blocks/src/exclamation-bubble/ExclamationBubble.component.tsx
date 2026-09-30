import type { FunctionComponent } from 'react';
import { Icon, motionLinesIcon } from '@naovixen/components';

import { SpeechBubble } from '../speech-bubble/SpeechBubble.component';
import type { IExclamationBubbleProps } from './interfaces/IExclamationBubbleProps';

/** A speech bubble with motion lines beside it, for a greeting said with some energy. */
export const ExclamationBubble: FunctionComponent<IExclamationBubbleProps> = ({ children }) => (
    <div className="nv-exclamation-bubble">
        <SpeechBubble>{children}</SpeechBubble>
        <Icon source={motionLinesIcon} className="nv-exclamation-bubble__lines" />
    </div>
);

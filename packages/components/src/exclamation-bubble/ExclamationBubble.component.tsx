import type { FunctionComponent } from 'react';
import { Icon } from '../icon/Icon.component';
import { motionLinesIcon } from '../icon/icons/MotionLines.icon';

import { SpeechBubble } from '../speech-bubble/SpeechBubble.component';
import type { IExclamationBubbleProps } from './interfaces/IExclamationBubbleProps';

/** A speech bubble with motion lines beside it, for a greeting said with some energy. */
export const ExclamationBubble: FunctionComponent<IExclamationBubbleProps> = ({ children }) => (
    <div className="nv-exclamation-bubble">
        <SpeechBubble>{children}</SpeechBubble>
        <Icon source={motionLinesIcon} className="nv-exclamation-bubble__lines" />
    </div>
);

import type { ReactNode } from 'react';

export interface IGreetingHeadingProps {
    /** A speech bubble shown above the heading, such as a SpeechBubble or an ExclamationBubble. */
    readonly greeting: ReactNode;
    /** The page's `<h1>` text. */
    readonly children: ReactNode;
}

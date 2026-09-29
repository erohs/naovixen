import type { ReactNode } from 'react';

export interface IGreetingHeadingProps {
    /** A handwritten aside in a speech bubble above the heading, such as "say hello!". */
    readonly greeting: string;
    /** The page's `<h1>` text. */
    readonly children: ReactNode;
}

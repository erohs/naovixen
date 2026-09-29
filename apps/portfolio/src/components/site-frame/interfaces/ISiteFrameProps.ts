import type { ReactNode } from 'react';

export interface ISiteFrameProps {
    /** Passed in rather than read from the clock, so the server and the browser agree. */
    readonly year: number;
    readonly children: ReactNode;
}

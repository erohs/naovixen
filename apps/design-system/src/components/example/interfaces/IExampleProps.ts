import type { ReactNode } from 'react';

export interface IExampleProps {
    /** What is shown, such as "Button". */
    readonly name: string;
    /** One or more renderings of it, side by side where they fit. */
    readonly children: ReactNode;
}

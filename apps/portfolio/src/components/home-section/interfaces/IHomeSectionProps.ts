import type { ReactNode } from 'react';
import type { IContainerProps } from '@naovixen/layout';

export interface IHomeSectionProps extends Omit<IContainerProps, 'as'> {
    readonly heading: string;
    /** Goes on the heading, and names the section landmark. */
    readonly headingId: string;
    readonly intro?: string | undefined;
    /** A link beside the heading, such as "All posts". */
    readonly action?: ReactNode;
}

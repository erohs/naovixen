import type { ReactNode } from "react";

export interface IHomeSectionProps {
    readonly id?: string | undefined;
    readonly heading: string;
    /** Goes on the heading, and names the section landmark. */
    readonly headingId: string;
    readonly intro: string;
    /** A link beside the heading, such as "All posts". */
    readonly action?: ReactNode;
    readonly children: ReactNode;
}

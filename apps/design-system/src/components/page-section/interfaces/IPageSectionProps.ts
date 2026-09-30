import type { ReactNode } from 'react';

export interface IPageSectionProps {
    /** The fragment the contents link to. */
    readonly id: string;
    readonly title: string;
    readonly children: ReactNode;
}

import type { ComponentPropsWithRef } from 'react';

export interface IFooterColumnProps extends ComponentPropsWithRef<'nav'> {
    /** Names the column's navigation landmark as well as heading it. */
    readonly heading: string;
}

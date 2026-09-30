import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface IFooterProps extends ComponentPropsWithRef<'footer'> {
    /** The row beneath the columns, such as a copyright line and a privacy link. */
    readonly smallPrint: ReactNode;
}

import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ICalloutProps extends ComponentPropsWithRef<'div'> {
    /** A short handwritten label, such as "tip!". */
    readonly kind: ReactNode;
    readonly heading: ReactNode;
}

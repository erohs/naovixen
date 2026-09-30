import type { ComponentPropsWithRef, ReactNode } from 'react';

/** `title` is the visible heading, not the element's tooltip attribute. */
export interface ICalloutProps extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
    /** A short handwritten label, such as "tip!". */
    readonly label: ReactNode;
    readonly title: ReactNode;
}

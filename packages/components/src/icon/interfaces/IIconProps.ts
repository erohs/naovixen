import type { ComponentPropsWithRef } from 'react';

export interface IIconProps extends Omit<
    ComponentPropsWithRef<'span'>,
    'children' | 'dangerouslySetInnerHTML'
> {
    /** A complete `<svg>` element as a string, such as `sunIcon`. Trusted markup only. */
    readonly source: string;
}

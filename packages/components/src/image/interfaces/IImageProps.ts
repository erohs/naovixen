import type { ComponentPropsWithRef } from 'react';

/** Alt text and intrinsic size are required: one for screen readers, one against layout shift. */
export interface IImageProps extends ComponentPropsWithRef<'img'> {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
}

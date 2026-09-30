import type { IImage } from './IImage';

/** Renders as Figure. */
export interface IFigureBlock {
    readonly _type: 'figure';
    readonly _key: string;
    readonly image: IImage;
    readonly caption?: string | undefined;
    /** Wide for screenshots, portrait for photos. */
    readonly shape: 'wide' | 'portrait';
}

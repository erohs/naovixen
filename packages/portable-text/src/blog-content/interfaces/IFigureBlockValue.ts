import type { FigureShape } from '@naovixen/blocks';
import type { IImage } from '@naovixen/cms';
import type { TypedObject } from '@portabletext/types';

export interface IFigureBlockValue extends TypedObject {
    readonly _type: 'figure';
    readonly image: IImage;
    readonly caption?: string | undefined;
    readonly shape?: FigureShape | undefined;
}

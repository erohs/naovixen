import type { FigureShape } from '@naovixen/blocks';
import type { IImage } from '@naovixen/models';
import type { TypedObject } from '@portabletext/types';

/** A block whose `_type` is `figure`. */
export interface IFigureBlockValue extends TypedObject {
    readonly image: IImage;
    readonly caption?: string | undefined;
    readonly shape?: FigureShape | undefined;
}

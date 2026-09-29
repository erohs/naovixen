import type { IImage } from '@naovixen/models';
import type { TypedObject } from '@portabletext/types';

import type { FigureShape } from '../../enums/FigureShape';

/** A block whose `_type` is `figure`. */
export interface IFigureBlockValue extends TypedObject {
  readonly image: IImage;
  readonly caption?: string | undefined;
  readonly shape?: FigureShape | undefined;
}

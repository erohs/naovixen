import type { IImage } from '@naovixen/models';

import type { FigureShape } from '../../enums/FigureShape';

export interface IFigureProps {
  readonly image: IImage;
  readonly caption?: string | undefined;
  readonly shape?: FigureShape | undefined;
}

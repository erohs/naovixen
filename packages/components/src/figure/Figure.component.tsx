import type { FunctionComponent } from 'react';

import { FigureShape } from '../enums/FigureShape';
import { Image } from '../image/Image.component';
import type { IFigureProps } from './interfaces/IFigureProps';

export const Figure: FunctionComponent<IFigureProps> = ({
  image,
  caption,
  shape = FigureShape.Wide,
}) => (
  <figure className={`nx-figure nx-figure--${shape}`}>
    <Image image={image} className="nx-figure__image" />
    {caption && <figcaption className="nx-figure__caption">{caption}</figcaption>}
  </figure>
);

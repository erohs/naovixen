import type { FunctionComponent } from 'react';
import { Image } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import { FigureShape } from './enums/FigureShape';
import type { IFigureProps } from './interfaces/IFigureProps';

export const Figure: FunctionComponent<IFigureProps> = ({
    image,
    caption,
    shape = FigureShape.Wide,
    className,
    ...figureProps
}) => (
    <figure
        {...figureProps}
        className={joinClassNames('nx-figure', `nx-figure--${shape}`, className)}
    >
        <Image {...image} className={joinClassNames('nx-figure__image', image.className)} />
        {caption && <figcaption className="nx-figure__caption">{caption}</figcaption>}
    </figure>
);

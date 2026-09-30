import { FigureShape } from '@naovixen/components';
import type { IFigureBlock } from '@naovixen/cms';

/** The Studio stores the shape as a string; the component takes the enum. */
export const figureShapeByName: Readonly<Record<IFigureBlock['shape'], FigureShape>> = {
    wide: FigureShape.Wide,
    portrait: FigureShape.Portrait,
};

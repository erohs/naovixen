import type { ComponentProps, ComponentPropsWithRef, ReactNode } from 'react';
import type { Image } from '../../image/Image.component';

import type { FigureShape } from '../enums/FigureShape';

export interface IFigureProps extends Omit<ComponentPropsWithRef<'figure'>, 'children'> {
    readonly image: ComponentProps<typeof Image>;
    readonly caption?: ReactNode;
    readonly shape?: FigureShape | undefined;
}

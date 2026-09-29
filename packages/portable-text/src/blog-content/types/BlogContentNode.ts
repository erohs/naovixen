import type { PortableTextBlock } from '@portabletext/types';

import type { ICalloutBlockValue } from '../interfaces/ICalloutBlockValue';
import type { ICodeBlockValue } from '../interfaces/ICodeBlockValue';
import type { IFigureBlockValue } from '../interfaces/IFigureBlockValue';

export type BlogContentNode =
    PortableTextBlock | ICalloutBlockValue | ICodeBlockValue | IFigureBlockValue;

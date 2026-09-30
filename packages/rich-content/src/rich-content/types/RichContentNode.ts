import type { PortableTextBlock } from '@portabletext/types';

import type { ICalloutBlockValue } from '../interfaces/ICalloutBlockValue';
import type { ICodeBlockValue } from '../interfaces/ICodeBlockValue';
import type { IFactListBlockValue } from '../interfaces/IFactListBlockValue';
import type { IFigureBlockValue } from '../interfaces/IFigureBlockValue';
import type { ILinkButtonsBlockValue } from '../interfaces/ILinkButtonsBlockValue';
import type { ISectionHeadingBlockValue } from '../interfaces/ISectionHeadingBlockValue';

export type RichContentNode =
    | PortableTextBlock
    | ISectionHeadingBlockValue
    | ICalloutBlockValue
    | ICodeBlockValue
    | IFigureBlockValue
    | IFactListBlockValue
    | ILinkButtonsBlockValue;

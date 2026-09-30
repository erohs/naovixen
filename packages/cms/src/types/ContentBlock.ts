import type { IButtonGroupBlock } from '../interfaces/IButtonGroupBlock';
import type { ICalloutBlock } from '../interfaces/ICalloutBlock';
import type { ICodeBlock } from '../interfaces/ICodeBlock';
import type { IFactListBlock } from '../interfaces/IFactListBlock';
import type { IFigureBlock } from '../interfaces/IFigureBlock';
import type { ISectionHeadingBlock } from '../interfaces/ISectionHeadingBlock';

/**
 * The site's own blocks, one per component that renders them. A new block in the Studio
 * joins this union, and the compiler then asks for its normaliser and its renderer.
 */
export type ContentBlock =
    | ISectionHeadingBlock
    | ICalloutBlock
    | ICodeBlock
    | IFigureBlock
    | IFactListBlock
    | IButtonGroupBlock;

import type { ITextBlock } from '../interfaces/ITextBlock';
import type { ContentBlock } from './ContentBlock';

/** One item of a body: a text block, or one of the site's own blocks. */
export type BodyNode = ITextBlock | ContentBlock;

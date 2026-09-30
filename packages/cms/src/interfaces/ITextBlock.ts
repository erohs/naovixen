import type { ILinkMark } from './ILinkMark';
import type { ITextSpan } from './ITextSpan';

/**
 * A Portable Text block: a paragraph, heading, quote or list item. Declared here rather than
 * taken from the library so it holds only what the Studio can save, with nothing typed `any`.
 */
export interface ITextBlock {
    readonly _type: 'block';
    readonly _key: string;
    readonly style?: 'normal' | 'h2' | 'h3' | 'blockquote' | undefined;
    readonly listItem?: 'bullet' | 'number' | undefined;
    readonly level?: number | undefined;
    readonly markDefs: readonly ILinkMark[];
    readonly children: readonly ITextSpan[];
}

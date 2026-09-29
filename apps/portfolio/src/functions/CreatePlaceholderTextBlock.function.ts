import type { PortableTextBlock } from '@portabletext/types';

/** Shorthand for the placeholder posts: one unstyled span in a text block. */
export function createPlaceholderTextBlock(
    key: string,
    text: string,
    style = 'normal',
): PortableTextBlock {
    return {
        _type: 'block',
        _key: key,
        style,
        markDefs: [],
        children: [{ _type: 'span', _key: `${key}-text`, text, marks: [] }],
    };
}

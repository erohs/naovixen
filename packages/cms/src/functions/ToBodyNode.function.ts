import type { ImageUrlBuilder } from '@sanity/image-url';
import type { ArbitraryTypedObject } from '@portabletext/types';

import type { SanityBodyNode } from '../types/SanityBodyNode';
import { toImage } from './ToImage.function';

/**
 * Fills in what Sanity leaves optional but Portable Text renderers expect, and resolves images
 * to URLs. `undefined` drops a node that cannot render, such as an image still uploading.
 */
export function toBodyNode(
    node: SanityBodyNode,
    imageUrls: ImageUrlBuilder,
): ArbitraryTypedObject | undefined {
    switch (node._type) {
        case 'block':
            return { ...node, children: node.children ?? [], markDefs: node.markDefs ?? [] };
        case 'code':
            return { ...node, code: node.code ?? '', language: node.language ?? 'text' };
        case 'figure': {
            const image = toImage(node.image, imageUrls);

            return image === undefined ? undefined : { ...node, image };
        }
        default:
            return node;
    }
}

import type { ImageUrlBuilder } from '@sanity/image-url';

import type { BodyNode } from '../types/BodyNode';
import type { SanityBodyNode } from '../types/SanityBodyNode';
import { numberSectionHeadings } from './NumberSectionHeadings.function';
import { toBodyNode } from './ToBodyNode.function';

export function toBody(
    body: readonly SanityBodyNode[],
    imageUrls: ImageUrlBuilder,
): readonly BodyNode[] {
    const nodes = body
        .map((node) => toBodyNode(node, imageUrls))
        .filter((node) => node !== undefined);

    return numberSectionHeadings(nodes);
}

import type { ImageUrlBuilder } from '@sanity/image-url';
import type { TypedObject } from '@portabletext/types';

import type { SanityBodyNode } from '../types/SanityBodyNode';
import { toBodyNode } from './ToBodyNode.function';

export function toBody(
    body: readonly SanityBodyNode[],
    imageUrls: ImageUrlBuilder,
): readonly TypedObject[] {
    return body.map((node) => toBodyNode(node, imageUrls)).filter((node) => node !== undefined);
}

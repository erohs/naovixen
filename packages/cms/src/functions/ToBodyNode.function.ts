import type { ImageUrlBuilder } from '@sanity/image-url';

import { bodyNodeNormalisers } from '../constants/BodyNodeNormalisers.const';
import type { BodyNode } from '../types/BodyNode';
import type { BodyNodeNormaliser } from '../types/BodyNodeNormaliser';
import type { SanityBodyNode } from '../types/SanityBodyNode';

export function toBodyNode(node: SanityBodyNode, imageUrls: ImageUrlBuilder): BodyNode | undefined {
    /** TypeScript cannot relate a node's `_type` to the entry it picks, so it is widened here. */
    const normalise = bodyNodeNormalisers[node._type] as BodyNodeNormaliser;

    return normalise(node, imageUrls);
}

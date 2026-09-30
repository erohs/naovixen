import type { ImageUrlBuilder } from '@sanity/image-url';
import type { ArbitraryTypedObject } from '@portabletext/types';

import { bodyNodeNormalisers } from '../constants/BodyNodeNormalisers.const';
import type { BodyNodeNormaliser } from '../types/BodyNodeNormaliser';
import type { SanityBodyNode } from '../types/SanityBodyNode';

export function toBodyNode(
    node: SanityBodyNode,
    imageUrls: ImageUrlBuilder,
): ArbitraryTypedObject | undefined {
    /** TypeScript cannot relate a node's `_type` to the entry it picks, so it is widened here. */
    const normalise = bodyNodeNormalisers[node._type] as BodyNodeNormaliser | undefined;

    return normalise === undefined ? node : normalise(node, imageUrls);
}

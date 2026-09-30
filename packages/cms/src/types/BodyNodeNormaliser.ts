import type { ImageUrlBuilder } from '@sanity/image-url';
import type { ArbitraryTypedObject } from '@portabletext/types';

import type { SanityBodyNode } from './SanityBodyNode';

/** Readies one kind of block for a renderer; `undefined` drops a block that cannot render. */
export type BodyNodeNormaliser<TNode extends SanityBodyNode = SanityBodyNode> = (
    node: TNode,
    imageUrls: ImageUrlBuilder,
) => ArbitraryTypedObject | undefined;

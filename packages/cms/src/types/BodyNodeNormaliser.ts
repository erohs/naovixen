import type { ImageUrlBuilder } from '@sanity/image-url';

import type { BodyNode } from './BodyNode';
import type { SanityBodyNode } from './SanityBodyNode';

/** Readies one kind of node for a renderer; `undefined` drops a node that cannot render. */
export type BodyNodeNormaliser<
    TSanityNode extends SanityBodyNode = SanityBodyNode,
    TNode extends BodyNode = BodyNode,
> = (node: TSanityNode, imageUrls: ImageUrlBuilder) => TNode | undefined;

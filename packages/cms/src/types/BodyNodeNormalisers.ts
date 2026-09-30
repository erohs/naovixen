import type { BodyNodeNormaliser } from './BodyNodeNormaliser';
import type { SanityBodyNode } from './SanityBodyNode';

/** At most one normaliser per block type, each typed for the block it receives. */
export type BodyNodeNormalisers = {
    readonly [TType in SanityBodyNode['_type']]?: BodyNodeNormaliser<
        Extract<SanityBodyNode, { _type: TType }>
    >;
};

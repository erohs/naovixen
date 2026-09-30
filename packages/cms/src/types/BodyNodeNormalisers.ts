import type { BodyNode } from './BodyNode';
import type { BodyNodeNormaliser } from './BodyNodeNormaliser';
import type { SanityBodyNode } from './SanityBodyNode';

/**
 * One normaliser per node type the Studio can save, each turning the generated Sanity shape
 * into the site's. A block added to the Studio fails to compile here until it is handled.
 */
export type BodyNodeNormalisers = {
    readonly [TType in SanityBodyNode['_type']]: BodyNodeNormaliser<
        Extract<SanityBodyNode, { _type: TType }>,
        Extract<BodyNode, { _type: TType }>
    >;
};

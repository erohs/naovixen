import type { BodyNodeNormalisers } from '../types/BodyNodeNormalisers';
import { toImage } from '../functions/ToImage.function';

/**
 * Fills in what Sanity leaves optional but Portable Text renderers expect, and resolves images
 * to URLs. A block with nothing to fill in needs no entry.
 */
export const bodyNodeNormalisers: BodyNodeNormalisers = {
    block: (node) => ({ ...node, children: node.children ?? [], markDefs: node.markDefs ?? [] }),
    code: (node) => ({ ...node, code: node.code ?? '', language: node.language ?? 'text' }),
    figure: (node, imageUrls) => {
        const image = toImage(node.image, imageUrls);

        return image === undefined ? undefined : { ...node, image };
    },
};

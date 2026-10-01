import type { BodyNodeNormalisers } from '../types/BodyNodeNormalisers';
import { toImage } from '../functions/ToImage.function';

/**
 * Fills in what Sanity leaves optional but the renderer expects, and resolves images to
 * URLs. A section heading's number is filled in afterwards, once the whole body is known.
 */
export const bodyNodeNormalisers: BodyNodeNormalisers = {
    block: (node) => ({
        ...node,
        children: (node.children ?? []).map((span) => ({ ...span, text: span.text ?? '' })),
        markDefs: node.markDefs ?? [],
    }),
    sectionHeading: (node) => ({ ...node, number: 0 }),
    callout: (node) => node,
    code: (node) => ({ ...node, code: node.code ?? '', language: node.language ?? 'text' }),
    figure: (node, imageUrls) => {
        const image = toImage(node.image, imageUrls);

        return image === undefined ? undefined : { ...node, image };
    },
    factList: (node) => node,
    linkButtons: (node) => node,
};

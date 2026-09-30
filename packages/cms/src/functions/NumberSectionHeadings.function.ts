import type { BodyNode } from '../types/BodyNode';

/** Gives each section heading its place among the others, counting from one. */
export function numberSectionHeadings(body: readonly BodyNode[]): readonly BodyNode[] {
    let count = 0;

    return body.map((node) => {
        if (node._type !== 'sectionHeading') {
            return node;
        }
        count += 1;

        return { ...node, number: count };
    });
}

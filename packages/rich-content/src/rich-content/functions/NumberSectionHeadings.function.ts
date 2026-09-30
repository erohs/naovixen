import type { TypedObject } from '@portabletext/types';

/** Gives each numbered heading its place among the others, counting from one. */
export function numberSectionHeadings(body: readonly TypedObject[]): TypedObject[] {
    let count = 0;

    return body.map((node) => {
        if (node._type !== 'sectionHeading') {
            return node;
        }
        count += 1;

        return { ...node, number: count };
    });
}

import type { BodyNode } from "../types/BodyNode";

/** Gives each numbered section heading its place among the numbered ones, counting from one. */
export const numberSectionHeadings = (body: readonly BodyNode[]): readonly BodyNode[] => {
    let count = 0;

    return body.map((node) => {
        if (node._type !== "sectionHeading" || !node.isNumbered) {
            return node;
        }
        count += 1;

        return { ...node, number: count };
    });
};

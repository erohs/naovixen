import { headingLevels } from '../constants/HeadingLevels.const';
import type { IBodyNode } from '../interfaces/IBodyNode';

/**
 * The page owns the h1, so a body's headings start at level 2 and never skip one going
 * down, which is how screen reader users find their way through a page.
 */
export function validateHeadingOrder(body: readonly IBodyNode[] | undefined): true | string {
    let previousLevel = 1;

    for (const node of body ?? []) {
        const level = headingLevels[node._type === 'block' ? (node.style ?? '') : node._type];

        if (level === undefined) {
            continue;
        }
        if (level > previousLevel + 1) {
            return `A level ${String(level)} heading needs a level ${String(level - 1)} heading before it.`;
        }
        previousLevel = level;
    }

    return true;
}

import type { HeadingLevel } from '../types/HeadingLevel';

export const headingElementByLevel = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
} as const satisfies Record<HeadingLevel, string>;

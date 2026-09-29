import { HeadingSize } from '../enums/HeadingSize';
import type { HeadingLevel } from '../types/HeadingLevel';

/** The type scale stops at h4, so the two deepest levels share its size. */
export const headingSizeByLevel: Readonly<Record<HeadingLevel, HeadingSize>> = {
    1: HeadingSize.H1,
    2: HeadingSize.H2,
    3: HeadingSize.H3,
    4: HeadingSize.H4,
    5: HeadingSize.H4,
    6: HeadingSize.H4,
};

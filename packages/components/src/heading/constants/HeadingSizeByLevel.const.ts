import { HeadingSize } from '../../enums/HeadingSize';
import type { HeadingLevel } from '../../types/HeadingLevel';

export const headingSizeByLevel: Readonly<Record<HeadingLevel, HeadingSize>> = {
  1: HeadingSize.H1,
  2: HeadingSize.H2,
  3: HeadingSize.H3,
  4: HeadingSize.H4,
};

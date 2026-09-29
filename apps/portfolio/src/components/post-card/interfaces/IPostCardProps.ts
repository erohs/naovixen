import type { IBlogPostSummary } from '@naovixen/models';

import type { HeadingLevel } from '../../types/HeadingLevel';

export interface IBlogPostCardProps {
  readonly post: IBlogPostSummary;
  readonly href: string;
  readonly headingLevel: HeadingLevel;
}

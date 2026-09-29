import type { IProject } from '@naovixen/models';

import type { HeadingLevel } from '../../types/HeadingLevel';

export interface IProjectCardProps {
  readonly project: IProject;
  /** Where "Read case study" goes. */
  readonly href: string;
  readonly headingLevel: HeadingLevel;
}

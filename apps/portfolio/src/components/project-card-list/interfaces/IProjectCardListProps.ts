import type { IProjectSummary } from '@naovixen/cms';
import type { HeadingLevel } from '@naovixen/components';

export interface IProjectCardListProps {
    readonly projects: readonly IProjectSummary[];
    readonly headingLevel: HeadingLevel;
}

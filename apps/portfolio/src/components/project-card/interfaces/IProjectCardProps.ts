import type { ICardProps } from '@naovixen/blocks';
import type { IProjectSummary } from '@naovixen/cms';
import type { HeadingLevel } from '@naovixen/components';

export interface IProjectCardProps extends Omit<ICardProps, 'children'> {
    readonly project: IProjectSummary;
    readonly headingLevel: HeadingLevel;
}

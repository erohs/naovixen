import type { HeadingLevel, ICardProps } from '@naovixen/components';
import type { IProjectSummary } from '@naovixen/cms';

export interface IProjectCardProps extends Omit<ICardProps, 'children'> {
    readonly project: IProjectSummary;
    readonly headingLevel: HeadingLevel;
}

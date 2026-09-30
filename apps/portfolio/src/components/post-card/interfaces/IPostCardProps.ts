import type { HeadingLevel, ICardProps } from '@naovixen/components';
import type { IBlogPostSummary } from '@naovixen/cms';

export interface IPostCardProps extends Omit<ICardProps, 'children'> {
    readonly post: IBlogPostSummary;
    /** One below the heading above the list of cards. */
    readonly headingLevel: HeadingLevel;
}

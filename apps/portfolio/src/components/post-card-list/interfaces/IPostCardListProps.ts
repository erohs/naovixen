import type { HeadingLevel } from '@naovixen/components';
import type { IBlogPostSummary } from '@naovixen/models';

export interface IPostCardListProps {
    readonly posts: readonly IBlogPostSummary[];
    /** The level of each card's heading, one below the heading above the list. */
    readonly headingLevel: HeadingLevel;
}

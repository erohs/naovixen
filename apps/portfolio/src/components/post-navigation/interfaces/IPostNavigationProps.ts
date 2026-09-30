import type { IBlogPostSummary } from '@naovixen/cms';

export interface IPostNavigationProps {
    /** Offered as the next read. Leave it out on the oldest post. */
    readonly olderPost: IBlogPostSummary | undefined;
}

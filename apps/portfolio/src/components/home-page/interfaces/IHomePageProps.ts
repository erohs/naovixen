import type { IBlogPostSummary } from '@naovixen/models';

export interface IHomePageProps {
    /** The newest few posts. */
    readonly latestPosts: readonly IBlogPostSummary[];
}

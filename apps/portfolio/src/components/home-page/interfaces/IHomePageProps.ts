import type { IBlogPostSummary } from '@naovixen/cms';

export interface IHomePageProps {
    /** The newest few posts. */
    readonly latestPosts: readonly IBlogPostSummary[];
}

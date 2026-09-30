import type { IBlogPostSummary, IProjectSummary } from '@naovixen/cms';

export interface IHomePageProps {
    readonly featuredProjects: readonly IProjectSummary[];
    /** The newest few posts. */
    readonly latestPosts: readonly IBlogPostSummary[];
}

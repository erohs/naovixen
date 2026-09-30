import type { IBlogPostSummary } from '@naovixen/cms';

export interface IBlogPageProps {
    /** Newest first. */
    readonly posts: readonly IBlogPostSummary[];
}

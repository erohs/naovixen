import type { IBlogPostSummary } from '@naovixen/models';

export interface IBlogPageProps {
    /** Newest first. */
    readonly posts: readonly IBlogPostSummary[];
}

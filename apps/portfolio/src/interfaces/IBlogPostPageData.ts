import type { IBlogPost, IBlogPostSummary } from '@naovixen/cms';

export interface IBlogPostPageData {
    readonly post: IBlogPost;
    /** Offered as the next read. Missing on the oldest post. */
    readonly olderPost: IBlogPostSummary | undefined;
}

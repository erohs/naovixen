import type { IBlogPost, IBlogPostSummary } from '@naovixen/models';

export interface IBlogPostPageData {
    readonly post: IBlogPost;
    /** Offered as the next read. Missing on the oldest post. */
    readonly olderPost: IBlogPostSummary | undefined;
}

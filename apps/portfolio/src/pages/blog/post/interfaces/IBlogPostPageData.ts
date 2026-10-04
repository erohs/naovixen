import type { IBlogPost, IBlogPostSummary } from "@naovixen/cms";

export interface IBlogPostPageData {
    readonly post: IBlogPost;
    /** Offered as the previous read. Missing on the newest post. */
    readonly newerPost: IBlogPostSummary | undefined;
    /** Offered as the next read. Missing on the oldest post. */
    readonly olderPost: IBlogPostSummary | undefined;
    /** Empty when no other post shares a topic. */
    readonly relatedPosts: readonly IBlogPostSummary[];
}

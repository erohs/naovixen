import type { IBlogPostSummary } from "@naovixen/cms";

export interface IRelatedPostsProps {
    readonly posts: readonly IBlogPostSummary[];
}

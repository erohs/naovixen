import type { IBlogPostSummary } from "@naovixen/cms";

export interface IPostListProps {
    readonly posts: readonly IBlogPostSummary[];
}

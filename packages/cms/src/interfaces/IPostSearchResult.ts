import type { IBlogPostSummary } from "./IBlogPostSummary";

export interface IPostSearchResult {
    /** Best match first, then newest first. */
    readonly posts: readonly IBlogPostSummary[];
    /** Every published post, matched or not, so a page can say "3 of 12". */
    readonly totalCount: number;
}

import type { IBlogPost } from "./IBlogPost";
import type { IBlogPostSummary } from "./IBlogPostSummary";
import type { IPostSearchCriteria } from "./IPostSearchCriteria";
import type { IPostSearchResult } from "./IPostSearchResult";
import type { ITopic } from "./ITopic";

export interface IBlogRepository {
    /** Newest first. */
    listPosts(): Promise<readonly IBlogPostSummary[]>;
    /** Resolves to `undefined` when no published post has the slug, so a route can 404. */
    getPostBySlug(slug: string): Promise<IBlogPost | undefined>;
    /** Words match the start of words in a post's title, excerpt, topics or body. */
    searchPosts(criteria: IPostSearchCriteria): Promise<IPostSearchResult>;
    /** Topics on at least one post, most used first. */
    listTopics(): Promise<readonly ITopic[]>;
}

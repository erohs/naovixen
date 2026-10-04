import type { ImageUrlBuilder } from "@sanity/image-url";
import type {
    PostBySlugQueryResult,
    PostSearchQueryResult,
    PostSummariesQueryResult,
    TopicsQueryResult,
} from "../generated/SanityTypes";
import type { IBlogPost } from "../interfaces/IBlogPost";
import type { IBlogPostSummary } from "../interfaces/IBlogPostSummary";
import type { IBlogRepository } from "../interfaces/IBlogRepository";
import type { IGroqClient } from "../interfaces/IGroqClient";
import type { IPostSearchCriteria } from "../interfaces/IPostSearchCriteria";
import type { IPostSearchResult } from "../interfaces/IPostSearchResult";
import type { ITopic } from "../interfaces/ITopic";
import { toBody } from "../functions/ToBody.function";
import { postBySlugQuery } from "./constants/PostBySlugQuery.const";
import { postSearchQuery } from "./constants/PostSearchQuery.const";
import { postSummariesQuery } from "./constants/PostSummariesQuery.const";
import { topicsQuery } from "./constants/TopicsQuery.const";
import { toPostSummary } from "./functions/ToPostSummary.function";
import { toTextQuery } from "./functions/ToTextQuery.function";

export class SanityBlogRepository implements IBlogRepository {
    private readonly _client: IGroqClient;
    private readonly _imageUrls: ImageUrlBuilder;

    public constructor(client: IGroqClient, imageUrls: ImageUrlBuilder) {
        this._client = client;
        this._imageUrls = imageUrls;
    }

    public async listPosts(): Promise<readonly IBlogPostSummary[]> {
        const posts = await this._client.fetch<PostSummariesQueryResult>(postSummariesQuery, {});

        return posts.map(toPostSummary);
    }

    public async getPostBySlug(slug: string): Promise<IBlogPost | undefined> {
        const post = await this._client.fetch<PostBySlugQueryResult>(postBySlugQuery, { slug });

        if (post === null) {
            return undefined;
        }

        return { ...toPostSummary(post), body: toBody(post.body, this._imageUrls) };
    }

    public async searchPosts(criteria: IPostSearchCriteria): Promise<IPostSearchResult> {
        const result = await this._client.fetch<PostSearchQueryResult>(postSearchQuery, {
            textQuery: toTextQuery(criteria.query),
            topics: criteria.topics,
        });

        return { posts: result.posts.map(toPostSummary), totalCount: result.totalCount };
    }

    public listTopics(): Promise<readonly ITopic[]> {
        return this._client.fetch<TopicsQueryResult>(topicsQuery, {});
    }
}

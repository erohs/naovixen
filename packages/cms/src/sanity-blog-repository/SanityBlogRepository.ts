import type { ImageUrlBuilder } from '@sanity/image-url';

import type {
    PostBySlugQueryResult,
    PostSummariesQueryResult,
    PostTagsQueryResult,
} from '../generated/SanityTypes';
import type { IBlogPost } from '../interfaces/IBlogPost';
import type { IBlogPostSummary } from '../interfaces/IBlogPostSummary';
import type { IBlogRepository } from '../interfaces/IBlogRepository';
import type { IGroqClient } from '../interfaces/IGroqClient';
import { toBody } from '../functions/ToBody.function';
import { postBySlugQuery } from './constants/PostBySlugQuery.const';
import { postSummariesQuery } from './constants/PostSummariesQuery.const';
import { postTagsQuery } from './constants/PostTagsQuery.const';

import { toPostSummary } from './functions/ToPostSummary.function';

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

    public listTags(): Promise<readonly string[]> {
        return this._client.fetch<PostTagsQueryResult>(postTagsQuery, {});
    }
}

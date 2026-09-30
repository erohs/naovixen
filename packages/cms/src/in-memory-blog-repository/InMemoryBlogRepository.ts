import type { IBlogPost } from '../interfaces/IBlogPost';
import type { IBlogPostSummary } from '../interfaces/IBlogPostSummary';

import type { IBlogRepository } from '../interfaces/IBlogRepository';
import { toBlogPostSummary } from './functions/ToBlogPostSummary.function';

/** Posts held in memory: fixtures for tests, or content that has no CMS yet. */
export class InMemoryBlogRepository implements IBlogRepository {
    private readonly _posts: readonly IBlogPost[];

    public constructor(posts: readonly IBlogPost[]) {
        this._posts = [...posts].sort((first, second) =>
            second.publishedAt.localeCompare(first.publishedAt),
        );
    }

    public listPosts(): Promise<readonly IBlogPostSummary[]> {
        return Promise.resolve(this._posts.map(toBlogPostSummary));
    }

    public getPostBySlug(slug: string): Promise<IBlogPost | undefined> {
        return Promise.resolve(this._posts.find((post) => post.slug === slug));
    }

    public listTags(): Promise<readonly string[]> {
        const tags = new Set(this._posts.flatMap((post) => post.tags));

        return Promise.resolve([...tags].sort((first, second) => first.localeCompare(second)));
    }
}

import type { IBlogPost } from './IBlogPost';
import type { IBlogPostSummary } from './IBlogPostSummary';

export interface IBlogRepository {
    /** Newest first. */
    listPosts(): Promise<readonly IBlogPostSummary[]>;
    /** Resolves to `undefined` when no published post has the slug, so a route can 404. */
    getPostBySlug(slug: string): Promise<IBlogPost | undefined>;
}

import type { IBlogPost } from '../../interfaces/IBlogPost';
import type { IBlogPostSummary } from '../../interfaces/IBlogPostSummary';

/** Leaves the body behind, so a listing does not carry every post's full content. */
export function toBlogPostSummary(post: IBlogPost): IBlogPostSummary {
    return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        readingTimeInMinutes: post.readingTimeInMinutes,
        tags: post.tags,
    };
}

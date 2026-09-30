import { calculateReadingTime } from '@naovixen/utilities';

import type { PostSummariesQueryResult } from '../../generated/SanityTypes';
import type { IBlogPostSummary } from '../../interfaces/IBlogPostSummary';

export function toPostSummary(post: PostSummariesQueryResult[number]): IBlogPostSummary {
    return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        readingTimeInMinutes: calculateReadingTime(post.plainText),
        tags: post.tags,
    };
}

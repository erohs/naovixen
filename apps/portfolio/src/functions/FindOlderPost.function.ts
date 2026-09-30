import type { IBlogPostSummary } from '@naovixen/cms';

/** The post after the given one in a newest-first list, or nothing when it is the oldest. */
export function findOlderPost(
    newestFirstPosts: readonly IBlogPostSummary[],
    slug: string,
): IBlogPostSummary | undefined {
    const index = newestFirstPosts.findIndex((post) => post.slug === slug);

    return index === -1 ? undefined : newestFirstPosts[index + 1];
}

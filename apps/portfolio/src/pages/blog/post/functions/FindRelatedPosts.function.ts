import type { IBlogPostSummary } from "@naovixen/cms";
import { relatedPostCount } from "../constants/RelatedPostCount.const";

/** Other posts sharing a topic with this one, those sharing most first, then newest first. */
export const findRelatedPosts = (
    newestFirstPosts: readonly IBlogPostSummary[],
    post: IBlogPostSummary,
): readonly IBlogPostSummary[] =>
    newestFirstPosts
        .filter((other) => other.slug !== post.slug)
        .map((other) => ({ other, sharedCount: other.tags.filter((tag) => post.tags.includes(tag)).length }))
        .filter(({ sharedCount }) => sharedCount > 0)
        .toSorted((first, second) => second.sharedCount - first.sharedCount)
        .slice(0, relatedPostCount)
        .map(({ other }) => other);

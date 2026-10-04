import { slugify } from "./slugify";

export interface PostSummary {
    id: string;
    data: { title: string; published: Date; topics: string[] };
}

export interface Topic {
    name: string;
    slug: string;
    count: number;
}

export const newestFirst = <T extends PostSummary>(posts: readonly T[]): T[] =>
    posts.toSorted((first, second) => second.data.published.getTime() - first.data.published.getTime());

/** The posts either side of one, from a list sorted newest first. Neither end wraps. */
export const adjacentPosts = <T extends PostSummary>(
    posts: readonly T[],
    id: string,
): { newer: T | undefined; older: T | undefined } => {
    const index = posts.findIndex((post) => post.id === id);
    return { newer: index > 0 ? posts[index - 1] : undefined, older: posts[index + 1] };
};

/** Other posts sharing a topic with this one: most topics shared first, then newest. */
export const relatedPosts = <T extends PostSummary>(posts: readonly T[], post: T, limit = 2): T[] => {
    const shared = (other: T): number => other.data.topics.filter((topic) => post.data.topics.includes(topic)).length;
    return newestFirst(posts.filter((other) => other.id !== post.id && shared(other) > 0))
        .toSorted((first, second) => shared(second) - shared(first))
        .slice(0, limit);
};

/** Every topic used by at least one post, most used first, then alphabetically. */
export const topicsOf = (posts: readonly PostSummary[]): Topic[] => {
    const counts = new Map<string, number>();
    for (const topic of posts.flatMap((post) => post.data.topics)) {
        counts.set(topic, (counts.get(topic) ?? 0) + 1);
    }
    return [...counts]
        .map(([name, count]) => ({ name, slug: slugify(name), count }))
        .toSorted((first, second) => second.count - first.count || first.name.localeCompare(second.name, "en-GB"));
};

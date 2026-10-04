export interface ISearchablePost {
    id: string;
    title: string;
    excerpt: string;
    body: string;
    topics: string[];
    /** ISO date, so the newest can win a tie. */
    published: string;
}

export interface ISearchCriteria {
    /** Words to find, as typed. Empty matches every post. */
    query: string;
    /** A post with any of these topics matches; none matches every post. */
    topics: string[];
}

const wordsOf = (text: string): string[] => text.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];

/** Every typed word must begin some word in the text. */
const matchesAll = (terms: string[], text: string): boolean => {
    const words = wordsOf(text);
    return terms.every((term) => words.some((word) => word.startsWith(term)));
};

/** A match in the title counts three times, in the excerpt twice, in the body once. */
const scoreOf = (post: ISearchablePost, terms: string[]): number =>
    (matchesAll(terms, post.title) ? 3 : 0) +
    (matchesAll(terms, post.excerpt) ? 2 : 0) +
    (matchesAll(terms, post.body) ? 1 : 0);

const hasTopic = (post: ISearchablePost, topics: string[]): boolean =>
    topics.length === 0 || post.topics.some((topic) => topics.includes(topic));

/** The ids of matching posts, best match first, then newest first. */
export const searchPosts = (posts: readonly ISearchablePost[], criteria: ISearchCriteria): string[] => {
    const terms = wordsOf(criteria.query);
    const haystack = (post: ISearchablePost): string => [post.title, post.excerpt, post.body, ...post.topics].join(" ");
    return posts
        .filter((post) => hasTopic(post, criteria.topics) && matchesAll(terms, haystack(post)))
        .map((post) => ({ post, score: scoreOf(post, terms) }))
        .toSorted(
            (first, second) => second.score - first.score || second.post.published.localeCompare(first.post.published),
        )
        .map(({ post }) => post.id);
};

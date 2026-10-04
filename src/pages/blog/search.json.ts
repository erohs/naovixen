import type { APIRoute } from "astro";
import { getPublishedPosts } from "../../lib/content";
import { isoDate } from "../../lib/format-date";
import { plainText } from "../../lib/plain-text";
import type { ISearchablePost } from "../../lib/search-posts";

/** What the blog's search reads, fetched only once a reader starts searching. */
export const GET: APIRoute = async () => {
    const posts: ISearchablePost[] = (await getPublishedPosts()).map((post) => ({
        id: post.id,
        title: post.data.title,
        excerpt: post.data.excerpt,
        body: plainText(post.body ?? ""),
        topics: post.data.topics,
        published: isoDate(post.data.published),
    }));
    return new Response(JSON.stringify(posts), { headers: { "Content-Type": "application/json" } });
};

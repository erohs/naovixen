import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getPublishedPosts } from "../../lib/content";
import { site } from "../../site";

export const GET: APIRoute = async (context) => {
    const posts = await getPublishedPosts();
    return rss({
        title: `${site.name}'s blog`,
        description: "Writing by Naomi Shore on front-end engineering, accessibility and building software.",
        site: new URL("/blog/", context.site),
        xmlns: { atom: "http://www.w3.org/2005/Atom" },
        customData: `<language>en-gb</language><atom:link href="${new URL("/blog/feed.xml", context.site).href}" rel="self" type="application/rss+xml"/>`,
        trailingSlash: true,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.excerpt,
            pubDate: post.data.published,
            link: `/blog/${post.id}/`,
            categories: post.data.topics,
        })),
    });
};

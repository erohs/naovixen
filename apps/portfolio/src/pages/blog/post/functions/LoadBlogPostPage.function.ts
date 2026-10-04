import { notFound } from "@tanstack/react-router";
import type { IBlogRepository } from "@naovixen/cms";
import type { IBlogPostPageData } from "../interfaces/IBlogPostPageData";
import { findNewerPost } from "./FindNewerPost.function";
import { findOlderPost } from "./FindOlderPost.function";
import { findRelatedPosts } from "./FindRelatedPosts.function";

/** Throws the router's not-found for an unknown slug, which renders the 404 with a 404 status. */
export const loadBlogPostPage = async (blogRepository: IBlogRepository, slug: string): Promise<IBlogPostPageData> => {
    const [post, posts] = await Promise.all([blogRepository.getPostBySlug(slug), blogRepository.listPosts()]);

    if (post === undefined) {
        /* eslint-disable-next-line @typescript-eslint/only-throw-error -- the router's own signal */
        throw notFound();
    }

    return {
        post,
        newerPost: findNewerPost(posts, slug),
        olderPost: findOlderPost(posts, slug),
        relatedPosts: findRelatedPosts(posts, post),
    };
};

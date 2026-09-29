import { notFound } from '@tanstack/react-router';
import type { IBlogRepository } from '@naovixen/cms';

import type { IBlogPostPageData } from '../interfaces/IBlogPostPageData';
import { findOlderPost } from './FindOlderPost.function';

/** Throws the router's not-found for an unknown slug, which renders the 404 with a 404 status. */
export async function loadBlogPostPage(
    blogRepository: IBlogRepository,
    slug: string,
): Promise<IBlogPostPageData> {
    const [post, posts] = await Promise.all([
        blogRepository.getPostBySlug(slug),
        blogRepository.listPosts(),
    ]);

    if (post === undefined) {
        /* eslint-disable-next-line @typescript-eslint/only-throw-error -- the router's own signal */
        throw notFound();
    }

    return { post, olderPost: findOlderPost(posts, slug) };
}

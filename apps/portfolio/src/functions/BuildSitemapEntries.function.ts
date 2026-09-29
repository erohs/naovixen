import type { IBlogRepository } from '@naovixen/cms';
import type { ISitemapEntry } from '@naovixen/seo';

import { indexedPagePaths } from '../constants/IndexedPagePaths.const';

export async function buildSitemapEntries(
    blogRepository: IBlogRepository,
): Promise<ISitemapEntry[]> {
    const posts = await blogRepository.listPosts();
    const postEntries = posts.map((post) => ({
        path: `/blog/${post.slug}`,
        lastModified: post.publishedAt,
    }));

    return [...indexedPagePaths.map((path) => ({ path })), ...postEntries];
}

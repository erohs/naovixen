import type { IBlogRepository, IProjectRepository } from '@naovixen/cms';
import type { ISitemapEntry } from '@naovixen/seo';

import { indexedPagePaths } from '../constants/IndexedPagePaths.const';

export async function buildSitemapEntries(
    blogRepository: IBlogRepository,
    projectRepository: IProjectRepository,
): Promise<ISitemapEntry[]> {
    const [posts, projects] = await Promise.all([
        blogRepository.listPosts(),
        projectRepository.listProjects(),
    ]);
    const postEntries = posts.map((post) => ({
        path: `/blog/${post.slug}`,
        lastModified: post.publishedAt,
    }));
    const projectEntries = projects.map((project) => ({ path: `/work/${project.slug}` }));

    return [...indexedPagePaths.map((path) => ({ path })), ...postEntries, ...projectEntries];
}

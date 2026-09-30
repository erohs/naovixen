import type { IBlogPost, IBlogPostSummary, IBlogRepository } from '@naovixen/cms';

import { getPostBySlugOnServer } from './constants/GetPostBySlugOnServer.const';
import { listPostsOnServer } from './constants/ListPostsOnServer.const';

/**
 * Reads through server functions, so the CMS is only ever called from the server: in the
 * same process while rendering a page, and over RPC when the browser navigates.
 */
export class ServerFunctionBlogRepository implements IBlogRepository {
    public listPosts(): Promise<readonly IBlogPostSummary[]> {
        return listPostsOnServer();
    }

    public getPostBySlug(slug: string): Promise<IBlogPost | undefined> {
        return getPostBySlugOnServer({ data: slug });
    }
}

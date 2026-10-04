import type {
    IBlogPost,
    IBlogPostSummary,
    IBlogRepository,
    IPostSearchCriteria,
    IPostSearchResult,
    ITopic,
} from "@naovixen/cms";
import { getPostBySlugOnServer } from "./constants/GetPostBySlugOnServer.const";
import { listPostsOnServer } from "./constants/ListPostsOnServer.const";
import { listTopicsOnServer } from "./constants/ListTopicsOnServer.const";
import { searchPostsOnServer } from "./constants/SearchPostsOnServer.const";

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

    public searchPosts(criteria: IPostSearchCriteria): Promise<IPostSearchResult> {
        return searchPostsOnServer({ data: criteria });
    }

    public listTopics(): Promise<readonly ITopic[]> {
        return listTopicsOnServer();
    }
}

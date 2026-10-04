import type { IBlogRepository, IPostSearchCriteria } from "@naovixen/cms";
import type { IBlogPageData } from "../interfaces/IBlogPageData";

export const loadBlogPage = async (
    blogRepository: IBlogRepository,
    criteria: IPostSearchCriteria,
): Promise<IBlogPageData> => {
    const [result, topics] = await Promise.all([blogRepository.searchPosts(criteria), blogRepository.listTopics()]);

    return { criteria, result, topics };
};

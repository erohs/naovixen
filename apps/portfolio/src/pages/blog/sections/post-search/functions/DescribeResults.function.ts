import type { IPostSearchCriteria, IPostSearchResult } from "@naovixen/cms";
import { translate } from "../../../../../translate/Translate.const";
import { topicListFormat } from "../constants/TopicListFormat.const";

/** How many posts show, and, once anything narrows them, out of how many and why. */
export const describeResults = (result: IPostSearchResult, criteria: IPostSearchCriteria): string => {
    const query = criteria.query.trim();
    const values = {
        count: result.posts.length,
        total: result.totalCount,
        query,
        topics: topicListFormat.format(criteria.topics),
    };
    const isTagged = criteria.topics.length > 0;

    if (query === "") {
        return isTagged ? translate("blog.results.tagged", values) : translate("blog.results.all", values);
    }

    return isTagged ? translate("blog.results.taggedMatching", values) : translate("blog.results.matching", values);
};

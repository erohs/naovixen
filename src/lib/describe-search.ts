import { site } from "../site";
import type { ISearchCriteria } from "./search-posts";

const topicList = new Intl.ListFormat(site.locale, { type: "disjunction" });

/** How many posts show, and, once anything narrows them, out of how many and why. */
export const describeResults = (count: number, total: number, criteria: ISearchCriteria): string => {
    const query = criteria.query.trim();
    if (query === "" && criteria.topics.length === 0) {
        return `${count} ${count === 1 ? "post" : "posts"}`;
    }
    const tagged = criteria.topics.length > 0 ? ` tagged ${topicList.format(criteria.topics)}` : "";
    const matching = query === "" ? "" : ` matching “${query}”`;
    return `Showing ${count} of ${total} posts${tagged}${matching}`;
};

/** The topic filter's button says what it is set to. */
export const describeSelectedTopics = (topics: readonly string[]): string => {
    if (topics.length === 0) return "All topics";
    if (topics.length === 1) return topics[0] ?? "";
    return `${topics.length} topics selected`;
};

import { translate } from "../../../../../translate/Translate.const";

/** The topic filter's button says what it is set to. */
export const describeSelectedTopics = (topics: readonly string[]): string => {
    if (topics.length === 0) {
        return translate("blog.allTopics");
    }

    return topics.length === 1 ? (topics[0] ?? "") : translate("blog.topicsSelected", { count: topics.length });
};

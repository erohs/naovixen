import type { IPostSearchCriteria } from "@naovixen/cms";

export const isSameCriteria = (first: IPostSearchCriteria, second: IPostSearchCriteria): boolean =>
    first.query === second.query &&
    first.topics.length === second.topics.length &&
    first.topics.every((topic, index) => topic === second.topics[index]);

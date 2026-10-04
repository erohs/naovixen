import type { IPostSearchCriteria, IPostSearchResult, ITopic } from "@naovixen/cms";

export interface IBlogPageData {
    /** What the results were found for, which can trail what is being typed. */
    readonly criteria: IPostSearchCriteria;
    readonly result: IPostSearchResult;
    readonly topics: readonly ITopic[];
}

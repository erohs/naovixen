import type { IPostSearchCriteria, IPostSearchResult, ITopic } from "@naovixen/cms";
import type { PostSearchController } from "../../../post-search-controller/PostSearchController";

export interface ISearchFormProps {
    readonly controller: PostSearchController;
    /** What the form shows, which can run ahead of the results. */
    readonly state: IPostSearchCriteria;
    /** What the results were found for. */
    readonly criteria: IPostSearchCriteria;
    readonly result: IPostSearchResult;
    readonly topics: readonly ITopic[];
}

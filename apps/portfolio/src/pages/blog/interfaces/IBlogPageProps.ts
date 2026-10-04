import type { IPostSearchCriteria } from "@naovixen/cms";
import type { IBlogPageData } from "./IBlogPageData";

export interface IBlogPageProps extends IBlogPageData {
    /** Shows the posts matching the criteria. */
    readonly onSearch: (criteria: IPostSearchCriteria) => void;
}

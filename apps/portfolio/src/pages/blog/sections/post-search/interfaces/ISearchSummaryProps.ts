import type { IPostSearchCriteria, IPostSearchResult } from "@naovixen/cms";

export interface ISearchSummaryProps {
    /** What the results were found for, so the summary always matches the list beneath it. */
    readonly criteria: IPostSearchCriteria;
    readonly result: IPostSearchResult;
    /** Whether the form holds anything to clear, which can run ahead of the results. */
    readonly canClear: boolean;
    readonly onClear: () => void;
}

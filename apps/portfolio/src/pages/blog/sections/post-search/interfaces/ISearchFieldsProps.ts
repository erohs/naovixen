import type { IPostSearchCriteria, ITopic } from "@naovixen/cms";

export interface ISearchFieldsProps {
    /** What the form shows, which can run ahead of the results. */
    readonly state: IPostSearchCriteria;
    readonly topics: readonly ITopic[];
    readonly onQueryChange: (query: string) => void;
    readonly onToggleTopic: (topic: string) => void;
}

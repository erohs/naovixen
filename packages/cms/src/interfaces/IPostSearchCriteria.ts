export interface IPostSearchCriteria {
    /** Words to find, as typed. Empty matches every post. */
    readonly query: string;
    /** Topic titles. A post with any of them matches; none matches every post. */
    readonly topics: readonly string[];
}

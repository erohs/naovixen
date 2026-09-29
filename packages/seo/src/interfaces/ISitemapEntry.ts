export interface ISitemapEntry {
    /** Root-relative, such as `/blog/hello`. */
    readonly path: string;
    /** ISO 8601 date, such as a post's publication date. */
    readonly lastModified?: string | undefined;
}

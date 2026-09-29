export interface IBlogPostSummary {
    readonly slug: string;
    readonly title: string;
    readonly excerpt: string;
    /** ISO 8601, so the value survives serialisation from server to browser. */
    readonly publishedAt: string;
    readonly readingTimeInMinutes: number;
    readonly tags: readonly string[];
}

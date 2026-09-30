/** What a BlogPosting needs from a post, whichever CMS it came from. */
export interface IPublishedPost {
    readonly slug: string;
    readonly title: string;
    readonly excerpt: string;
    /** ISO 8601. */
    readonly publishedAt: string;
    readonly tags: readonly string[];
}

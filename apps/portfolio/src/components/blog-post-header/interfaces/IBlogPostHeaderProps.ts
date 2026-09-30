import type { IBlogPostSummary } from '@naovixen/cms';

export interface IBlogPostHeaderProps {
    readonly post: IBlogPostSummary;
    /** Goes on the `<h1>`, for the article's `aria-labelledby`. */
    readonly headingId: string;
}

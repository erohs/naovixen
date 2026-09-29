import type { IBlogPostSummary } from '@naovixen/models';

export interface IBlogPostHeaderProps {
    readonly post: IBlogPostSummary;
    /** Goes on the `<h1>`, for the article's `aria-labelledby`. */
    readonly headingId: string;
}

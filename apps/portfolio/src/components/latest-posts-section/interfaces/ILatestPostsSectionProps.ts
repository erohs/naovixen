import type { IBlogPostSummary } from '@naovixen/models';

export interface ILatestPostsSectionProps {
    readonly posts: readonly IBlogPostSummary[];
}

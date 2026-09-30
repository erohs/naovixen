import type { IBlogPostSummary } from '@naovixen/cms';

export interface IPostDetailsProps {
    readonly post: IBlogPostSummary;
    /** Lays the details out for where they sit, such as the foot of a card. */
    readonly className: string;
}

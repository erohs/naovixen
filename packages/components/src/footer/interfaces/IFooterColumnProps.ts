import type { ILink } from '../../link/interfaces/ILink';

export interface IFooterColumnProps {
    /** Names the column's navigation landmark as well as heading it. */
    readonly heading: string;
    /** Links to pages here or to other sites. */
    readonly links: readonly ILink[];
    /** The path being shown; the link it falls under is marked as the current page. */
    readonly currentHref?: string | undefined;
}

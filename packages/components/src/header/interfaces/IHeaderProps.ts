import type { ReactNode } from 'react';

import type { ILink } from '../../link/interfaces/ILink';

export interface IHeaderProps {
    readonly items: readonly ILink[];
    /** The path being shown: it marks the current item, and leaving it closes the menu. */
    readonly currentHref: string;
    /** Controls at the end of the row, such as a theme toggle. */
    readonly actions?: ReactNode;
    readonly className?: string | undefined;
}

import type { ReactNode } from 'react';

import type { INavigationListProps } from '../../navigation-list/interfaces/INavigationListProps';

export interface IHeaderProps extends Pick<INavigationListProps, 'items' | 'currentHref'> {
    /** Controls at the end of the row, such as a theme toggle. */
    readonly actions?: ReactNode;
    readonly className?: string | undefined;
}

import type { ReactNode } from 'react';

import type { INavigationProps } from '../../navigation/interfaces/INavigationProps';

export interface IHeaderProps extends Pick<
    INavigationProps,
    'items' | 'currentHref' | 'linkComponent'
> {
    /** Controls at the end of the row, such as a theme toggle. */
    readonly actions?: ReactNode;
    readonly className?: string | undefined;
}

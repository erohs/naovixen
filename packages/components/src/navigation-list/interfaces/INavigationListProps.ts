import type { ComponentPropsWithRef } from 'react';

import type { ILink } from '../../link/interfaces/ILink';
import type { NavigationLayout } from '../enums/NavigationLayout';

export interface INavigationListProps extends Omit<ComponentPropsWithRef<'ul'>, 'children'> {
    readonly items: readonly ILink[];
    /** The path being shown; the item it falls under is marked as the current page. */
    readonly currentHref: string;
    /** Defaults to a column. */
    readonly layout?: NavigationLayout | undefined;
}

import type { ComponentPropsWithRef, ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';

import type { INavigationItem } from './INavigationItem';

export interface INavigationListProps extends ComponentPropsWithRef<'ul'> {
    readonly items: readonly INavigationItem[];
    /** The path being shown; the item it falls under is marked as the current page. */
    readonly currentHref: string;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

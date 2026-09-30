import type { ComponentPropsWithRef, ComponentType } from 'react';
import type { LinkProps } from '../../link/types/LinkProps';

import type { INavigationItem } from '../../navigation-list/interfaces/INavigationItem';
import type { NavigationLayout } from '../enums/NavigationLayout';

export interface INavigationProps extends Omit<ComponentPropsWithRef<'nav'>, 'children'> {
    readonly items: readonly INavigationItem[];
    /** The page being shown; the item it falls under is marked as the current page. */
    readonly currentHref: string;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
    /** Defaults to a row. */
    readonly layout?: NavigationLayout | undefined;
}

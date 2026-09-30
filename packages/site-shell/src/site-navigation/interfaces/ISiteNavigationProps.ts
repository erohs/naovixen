import type { ComponentPropsWithRef, ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';
import type { INavigationItem } from '@naovixen/blocks';

import type { SiteNavigationLayout } from '../enums/SiteNavigationLayout';

export interface ISiteNavigationProps extends Omit<ComponentPropsWithRef<'nav'>, 'children'> {
    readonly items: readonly INavigationItem[];
    /** The path being shown; the item it falls under is marked as the current page. */
    readonly currentPath: string;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
    /** Defaults to a row. */
    readonly layout?: SiteNavigationLayout | undefined;
}

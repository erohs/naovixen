import type { ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';
import type { INavigationItem } from '@naovixen/models';

export interface ISiteHeaderProps {
    readonly navigationItems: readonly INavigationItem[];
    /** The path being shown; the item it falls under is marked as the current page. */
    readonly currentPath: string;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
    readonly className?: string | undefined;
}

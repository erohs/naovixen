import type { ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';
import type { INavigationItem } from '@naovixen/blocks';
import type { ISocialLink } from '../../social-link-list/interfaces/ISocialLink';

export interface ISiteFooterDirectoryProps {
    /** One line about the site, beside the wordmark. */
    readonly blurb: string;
    readonly navigationItems: readonly INavigationItem[];
    readonly socialLinks: readonly ISocialLink[];
    readonly currentPath: string;
    /** Renders the site links; pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

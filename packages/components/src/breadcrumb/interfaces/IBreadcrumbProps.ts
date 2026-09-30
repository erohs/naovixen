import type { ComponentPropsWithRef, ComponentType } from 'react';
import type { LinkProps } from '../../link/types/LinkProps';

import type { IBreadcrumbItem } from './IBreadcrumbItem';

export interface IBreadcrumbProps extends ComponentPropsWithRef<'nav'> {
    /** The pages above this one, from the top down. */
    readonly trail: readonly IBreadcrumbItem[];
    /** Shown as text, not a link, and marked as the current page. */
    readonly currentLabel: string;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

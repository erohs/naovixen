import type { ComponentPropsWithRef, ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';

import type { IPaginationItem } from './IPaginationItem';

export interface IPaginationProps extends ComponentPropsWithRef<'nav'> {
    /** Usually the index this page belongs to, such as all projects. */
    readonly back: IPaginationItem;
    readonly next?: IPaginationItem | undefined;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

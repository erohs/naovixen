import type { ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';
import type { INavigationItem } from '@naovixen/blocks';

export interface ISiteFooterLegalProps {
    readonly copyrightHolder: string;
    /** Passed in rather than read from the clock, so the server and the browser agree. */
    readonly year: number;
    readonly privacyLink: INavigationItem;
    readonly currentPath: string;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
    readonly className?: string | undefined;
}

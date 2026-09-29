import type { ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';

export interface ILogoProps extends Omit<LinkProps, 'children'> {
    /** Where the logo leads. Defaults to the home page, `/`. */
    readonly href?: string | undefined;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

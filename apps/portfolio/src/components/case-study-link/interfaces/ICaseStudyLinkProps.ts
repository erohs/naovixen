import type { ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';

export interface ICaseStudyLinkProps extends Omit<LinkProps, 'children'> {
    /** Read after "Read case study", so each link is named for its own project. */
    readonly projectTitle: string;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

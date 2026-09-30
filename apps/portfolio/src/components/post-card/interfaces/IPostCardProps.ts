import type { ComponentType } from 'react';
import type { HeadingLevel, ICardProps, LinkProps } from '@naovixen/components';
import type { IBlogPostSummary } from '@naovixen/cms';

export interface IPostCardProps extends Omit<ICardProps, 'children'> {
    readonly post: IBlogPostSummary;
    /** Where the title links to. */
    readonly href: string;
    readonly headingLevel: HeadingLevel;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

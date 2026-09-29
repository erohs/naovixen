import type { ComponentType } from 'react';
import type { ICardProps } from '@naovixen/blocks';
import type { HeadingLevel, LinkProps } from '@naovixen/components';
import type { IProject } from '@naovixen/models';

export interface IProjectCardProps extends Omit<ICardProps, 'children'> {
    readonly project: IProject;
    /** Where "Read case study" goes. */
    readonly href: string;
    readonly headingLevel: HeadingLevel;
    /** Pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

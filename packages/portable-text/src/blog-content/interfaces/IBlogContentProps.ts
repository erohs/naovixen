import type { ComponentPropsWithRef, ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';
import type { IBlogPost } from '@naovixen/models';

export interface IBlogContentProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
    readonly body: IBlogPost['body'];
    /** Renders links to paths on this site; pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

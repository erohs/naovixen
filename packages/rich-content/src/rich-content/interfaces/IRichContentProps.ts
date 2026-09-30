import type { ComponentPropsWithRef, ComponentType } from 'react';
import type { LinkProps } from '@naovixen/components';
import type { TypedObject } from '@portabletext/types';

export interface IRichContentProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
    /** Portable Text blocks. A block type with no renderer is left out. */
    readonly body: readonly TypedObject[];
    /** Renders links to paths on this site; pass a router's link here. Defaults to `Link`. */
    readonly linkComponent?: ComponentType<LinkProps> | undefined;
}

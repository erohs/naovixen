import type { ReactNode } from 'react';

import type { ILinkProps } from '../../link/interfaces/ILinkProps';

export interface ILinkTileProps extends Omit<ILinkProps, 'children' | 'variant'> {
    readonly label: ReactNode;
    /** A second line under the label, such as a handle or an address. */
    readonly detail: ReactNode;
    /** An icon source shown in a disc before the label, such as `gitHubIcon`. */
    readonly icon: string;
    /** An icon source at the end that says where the link goes. Defaults to `arrowRightIcon`. */
    readonly trailingIcon?: string | undefined;
}

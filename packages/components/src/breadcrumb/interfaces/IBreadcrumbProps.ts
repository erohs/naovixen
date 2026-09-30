import type { ComponentPropsWithRef } from 'react';

import type { ILink } from '../../link/interfaces/ILink';

export interface IBreadcrumbProps extends ComponentPropsWithRef<'nav'> {
    /** The pages above this one, from the top down. */
    readonly trail: readonly ILink[];
    /** Shown as text, not a link, and marked as the current page. */
    readonly currentLabel: string;
}

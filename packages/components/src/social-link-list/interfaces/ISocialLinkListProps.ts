import type { ComponentPropsWithRef } from 'react';

import type { ILink } from '../../link/interfaces/ILink';

export interface ISocialLinkListProps extends Omit<ComponentPropsWithRef<'ul'>, 'children'> {
    /** Profiles elsewhere and an email address, each labelled by where it goes. */
    readonly links: readonly ILink[];
}

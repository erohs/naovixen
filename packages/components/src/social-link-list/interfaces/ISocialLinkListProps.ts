import type { ComponentPropsWithRef } from 'react';
import type { ISocialLink } from './ISocialLink';

export interface ISocialLinkListProps extends Omit<ComponentPropsWithRef<'ul'>, 'children'> {
    readonly links: readonly ISocialLink[];
}

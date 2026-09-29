import type { ComponentPropsWithRef } from 'react';

export interface ITagListProps extends Omit<ComponentPropsWithRef<'ul'>, 'children'> {
    readonly tags: readonly string[];
    /** Names the list for screen readers, such as "Tech stack". */
    readonly label: string;
}

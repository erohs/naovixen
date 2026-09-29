import type { ComponentPropsWithRef } from 'react';

export interface IInterestListProps extends Omit<ComponentPropsWithRef<'ul'>, 'children'> {
    readonly interests: readonly string[];
}

import type { ComponentPropsWithRef } from 'react';

import type { IFact } from './IFact';

export interface IFactListProps extends Omit<ComponentPropsWithRef<'dl'>, 'children'> {
    readonly facts: readonly IFact[];
}

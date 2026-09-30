import type { ComponentPropsWithRef } from 'react';
import type { TypedObject } from '@portabletext/types';

export interface IRichContentProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
    /** Portable Text blocks. A block type with no renderer is left out. */
    readonly body: readonly TypedObject[];
}

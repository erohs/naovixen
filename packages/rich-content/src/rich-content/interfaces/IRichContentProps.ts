import type { ComponentPropsWithRef } from 'react';
import type { BodyNode } from '@naovixen/cms';

export interface IRichContentProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
    readonly body: readonly BodyNode[];
}

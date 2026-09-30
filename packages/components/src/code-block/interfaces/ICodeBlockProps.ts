import type { ComponentPropsWithRef } from 'react';

export interface ICodeBlockProps extends Omit<ComponentPropsWithRef<'figure'>, 'children'> {
    readonly code: string;
    /** Shown as written, such as "TypeScript". */
    readonly language: string;
    readonly filename?: string | undefined;
}

import type { ComponentPropsWithRef, RefObject } from 'react';

export interface IDisclosureBindings {
    /** Wraps the button and the panel, so Escape only counts while focus is inside them. */
    readonly rootRef: RefObject<HTMLDivElement | null>;
    readonly buttonProps: ComponentPropsWithRef<'button'>;
    readonly panelProps: ComponentPropsWithRef<'div'>;
}

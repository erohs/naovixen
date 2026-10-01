import type { ComponentPropsWithRef, RefObject } from 'react';

export interface IHeaderMenuBindings {
    /** Wraps the button and the panel, the only places Tab reaches while the menu is open. */
    readonly menuRef: RefObject<HTMLDivElement | null>;
    readonly buttonProps: ComponentPropsWithRef<'button'>;
    readonly panelId: string;
}

import type { ReactNode } from 'react';

export interface IDisclosureProps {
    /** The button's content: text, or a `Button.Icon` beside text. */
    readonly label: ReactNode;
    readonly isOpen: boolean;
    /** Called with the state the user asked for; the caller decides whether to apply it. */
    readonly onOpenChange: (isOpen: boolean) => void;
    readonly children: ReactNode;
    readonly className?: string | undefined;
    readonly buttonClassName?: string | undefined;
    readonly panelClassName?: string | undefined;
}

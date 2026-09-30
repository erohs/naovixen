import { useCallback, useId, useRef } from 'react';

import type { IDisclosureBindings } from '../interfaces/IDisclosureBindings';
import { useCloseOnEscape } from './UseCloseOnEscape.hook';

/** Escape inside an open disclosure asks to close it and puts focus back on its button. */
export function useDisclosure(
    isOpen: boolean,
    onOpenChange: (isOpen: boolean) => void,
): IDisclosureBindings {
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const panelId = useId();

    const closeAndFocusButton = useCallback((): void => {
        onOpenChange(false);
        buttonRef.current?.focus();
    }, [onOpenChange]);

    useCloseOnEscape(rootRef, isOpen, closeAndFocusButton);

    const onClick = (): void => {
        onOpenChange(!isOpen);
    };

    return {
        rootRef,
        buttonProps: { ref: buttonRef, 'aria-expanded': isOpen, 'aria-controls': panelId, onClick },
        panelProps: { id: panelId, hidden: !isOpen },
    };
}

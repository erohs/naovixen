import { useCallback, useId, useRef } from 'react';

import type { IHeaderMenuBindings } from '../interfaces/IHeaderMenuBindings';
import { useMenuKeys } from './UseMenuKeys.hook';
import { useOpenOnPath } from './UseOpenOnPath.hook';

/** Closes when the page changes, or on Escape, which puts focus back on the button. */
export function useHeaderMenu(currentHref: string): IHeaderMenuBindings {
    const [isOpen, onOpenChange] = useOpenOnPath(currentHref);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const panelId = useId();

    const closeAndFocusButton = useCallback((): void => {
        onOpenChange(false);
        buttonRef.current?.focus();
    }, [onOpenChange]);

    useMenuKeys(menuRef, isOpen, closeAndFocusButton);

    const onClick = (): void => {
        onOpenChange(!isOpen);
    };

    return {
        menuRef,
        panelId,
        buttonProps: { ref: buttonRef, 'aria-expanded': isOpen, 'aria-controls': panelId, onClick },
    };
}

import { useEffect } from 'react';
import type { RefObject } from 'react';

import { wrapFocus } from './WrapFocus.function';

/** While the menu is open, Tab stays inside it and Escape calls `close`. */
export function useMenuKeys(
    menu: RefObject<HTMLElement | null>,
    isOpen: boolean,
    close: () => void,
): void {
    useEffect(() => {
        const target = menu.current;

        if (!isOpen || target === null) {
            return undefined;
        }

        const onKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                close();
            } else if (event.key === 'Tab') {
                wrapFocus(event, target);
            }
        };

        target.addEventListener('keydown', onKeyDown);

        return () => {
            target.removeEventListener('keydown', onKeyDown);
        };
    }, [menu, isOpen, close]);
}

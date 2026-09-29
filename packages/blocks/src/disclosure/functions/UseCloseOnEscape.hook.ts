import { useEffect } from 'react';
import type { RefObject } from 'react';

/** While `isActive`, calls `close` when Escape is pressed with focus inside `element`. */
export function useCloseOnEscape(
    element: RefObject<HTMLElement | null>,
    isActive: boolean,
    close: () => void,
): void {
    useEffect(() => {
        const target = element.current;

        if (!isActive || target === null) {
            return undefined;
        }

        const onKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                close();
            }
        };

        target.addEventListener('keydown', onKeyDown);

        return () => {
            target.removeEventListener('keydown', onKeyDown);
        };
    }, [element, isActive, close]);
}

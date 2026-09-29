import { useEffect } from 'react';
import type { RefObject } from 'react';

/** Calls `close` when Escape is pressed while focus is inside `element`. */
export function useCloseOnEscape(element: RefObject<HTMLElement | null>, close: () => void): void {
  useEffect(() => {
    const target = element.current;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        close();
      }
    };

    target?.addEventListener('keydown', onKeyDown);

    return () => {
      target?.removeEventListener('keydown', onKeyDown);
    };
  }, [element, close]);
}

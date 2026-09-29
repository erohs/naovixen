import { useCallback, useRef, useState } from 'react';

import type { IMobileMenuState } from '../interfaces/IMobileMenuState';
import { useCloseOnEscape } from './UseCloseOnEscape.hook';

/**
 * Remembers the path the menu was opened on rather than a plain flag, so following one of
 * its links changes the path and closes it without an effect.
 */
export function useMobileMenu(currentPath: string): IMobileMenuState {
  const [openedOnPath, setOpenedOnPath] = useState<string | undefined>(undefined);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isOpen = openedOnPath === currentPath;

  const closeAndFocusButton = useCallback((): void => {
    setOpenedOnPath(undefined);
    buttonRef.current?.focus();
  }, []);

  useCloseOnEscape(rootRef, closeAndFocusButton);

  const toggle = (): void => {
    setOpenedOnPath(isOpen ? undefined : currentPath);
  };

  return { isOpen, toggle, rootRef, buttonRef };
}

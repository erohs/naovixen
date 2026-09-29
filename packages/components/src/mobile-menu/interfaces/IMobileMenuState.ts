import type { RefObject } from 'react';

export interface IMobileMenuState {
  readonly isOpen: boolean;
  readonly toggle: () => void;
  /** Wraps the button and the menu, so Escape only counts while focus is inside them. */
  readonly rootRef: RefObject<HTMLDivElement | null>;
  readonly buttonRef: RefObject<HTMLButtonElement | null>;
}

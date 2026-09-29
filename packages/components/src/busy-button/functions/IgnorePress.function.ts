import type { MouseEvent } from 'react';

/** Also stops a busy submit button from sending its form a second time. */
export function ignorePress(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
}

import type { KeyboardEvent } from 'react';

/** A button answers to Space; an anchor on its own answers only to Enter, and Space scrolls. */
export function clickOnSpace(event: KeyboardEvent<HTMLAnchorElement>): void {
    if (event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
    }
}

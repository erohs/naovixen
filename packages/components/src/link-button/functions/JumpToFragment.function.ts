import type { MouseEvent } from 'react';

/**
 * Follows an in-page link without writing its fragment into the address, so a later visit to the
 * same address starts at the top of the page rather than focused on the target. Scrolls to the
 * target and focuses it, as the browser would. A modified click is left to the browser.
 */
export function jumpToFragment(event: MouseEvent<HTMLAnchorElement>): void {
    const target = document.getElementById(event.currentTarget.hash.slice(1));
    const isModified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (target === null || isModified) {
        return;
    }

    event.preventDefault();
    target.scrollIntoView();
    target.focus({ preventScroll: true });
}

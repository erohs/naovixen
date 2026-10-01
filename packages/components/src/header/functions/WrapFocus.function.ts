/**
 * Keeps Tab inside `container`: past its last link or button, focus goes back to its first, and
 * Shift+Tab from the first goes to the last.
 */
export function wrapFocus(event: KeyboardEvent, container: HTMLElement): void {
    const focusable = container.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const wrapFrom = event.shiftKey ? first : last;
    const wrapTo = event.shiftKey ? last : first;

    if (wrapTo !== undefined && document.activeElement === wrapFrom) {
        event.preventDefault();
        wrapTo.focus();
    }
}

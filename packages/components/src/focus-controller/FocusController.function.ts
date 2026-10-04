/**
 * Moves focus to the control whose `aria-controls` names `element`, such as the button of a disclosure,
 * a dropdown or a listbox, so focus is not lost when the element it was in closes.
 */
export const focusController = (element: HTMLElement): void => {
    element.ownerDocument.querySelector<HTMLElement>(`[aria-controls="${CSS.escape(element.id)}"]`)?.focus();
};

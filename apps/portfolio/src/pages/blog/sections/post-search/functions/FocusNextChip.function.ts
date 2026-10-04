import { focusSearchField } from "./FocusSearchField.function";

/**
 * Before a chip is removed, moves focus to the chip after it, or before it, or to the search field
 * when it is the last, so focus is not lost with the chip.
 */
export const focusNextChip = (chip: HTMLButtonElement): void => {
    const item = chip.closest("li");
    const neighbour = (item?.nextElementSibling ?? item?.previousElementSibling)?.querySelector("button");

    if (neighbour) {
        neighbour.focus();
    } else {
        focusSearchField(chip.form);
    }
};

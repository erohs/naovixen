import { searchFieldName } from "../constants/SearchFieldName.const";

export const focusSearchField = (form: HTMLFormElement | null): void => {
    const field = form?.elements.namedItem(searchFieldName);

    if (field instanceof HTMLInputElement) {
        field.focus();
    }
};

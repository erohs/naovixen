import type { FunctionComponent, MouseEvent } from "react";
import { Button, ButtonVariant, closeIcon } from "@naovixen/components";
import { translate } from "../../../../translate/Translate.const";
import { focusSearchField } from "./functions/FocusSearchField.function";
import type { IClearFiltersProps } from "./interfaces/IClearFiltersProps";

/** Goes once there is nothing to clear, so it hands focus to the search field first. */
export const ClearFilters: FunctionComponent<IClearFiltersProps> = ({ onClear }) => {
    const onClick = (event: MouseEvent<HTMLButtonElement>): void => {
        focusSearchField(event.currentTarget.form);
        onClear();
    };

    return (
        <Button variant={ButtonVariant.Chip} onClick={onClick}>
            {translate("blog.clearFilters")} <Button.Icon source={closeIcon} />
        </Button>
    );
};

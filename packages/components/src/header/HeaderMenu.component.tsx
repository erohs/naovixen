import { useId, useState } from "react";
import type { FunctionComponent } from "react";
import { translate } from "../translate/Translate.const";
import { holdMenuOpen } from "./functions/HoldMenuOpen.function";
import { HeaderMenuButton } from "./HeaderMenuButton.component";
import { HeaderMenuPanel } from "./HeaderMenuPanel.component";
import type { HeaderMenuProps } from "./types/HeaderMenuProps";

/**
 * The header's navigation on narrow screens: a disclosure whose panel slides over the page, under the
 * header's row, which stays in reach above it. It belongs to the path it was opened on, so following a
 * link or going back closes it, and coming back to that path later does not open it again.
 */
export const HeaderMenu: FunctionComponent<HeaderMenuProps> = ({ items, currentHref, menuFooter }) => {
    const panelId = useId();
    const [openedOnPath, setOpenedOnPath] = useState<string | undefined>(undefined);
    const isOpen = openedOnPath === currentHref;

    if (openedOnPath !== undefined && !isOpen) {
        setOpenedOnPath(undefined);
    }

    return (
        <div
            ref={(menu) => (isOpen && menu !== null ? holdMenuOpen(menu, panelId, setOpenedOnPath) : undefined)}
            className="nv-header__menu">
            <HeaderMenuButton
                label={translate("menu")}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="nv-header__menu-button"
                onClick={() => {
                    setOpenedOnPath(isOpen ? undefined : currentHref);
                }}
            />
            <HeaderMenuPanel id={panelId} items={items} currentHref={currentHref} menuFooter={menuFooter} />
        </div>
    );
};

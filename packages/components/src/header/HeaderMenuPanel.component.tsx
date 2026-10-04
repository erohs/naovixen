import type { FunctionComponent } from "react";
import { NavigationLayout } from "../navigation-list/enums/NavigationLayout";
import { NavigationList } from "../navigation-list/NavigationList.component";
import { translate } from "../translate/Translate.const";
import type { IHeaderMenuPanelProps } from "./interfaces/IHeaderMenuPanelProps";

/** The sheet that slides in under the header's row, its content scrolling inside it. */
export const HeaderMenuPanel: FunctionComponent<IHeaderMenuPanelProps> = ({ id, items, currentHref, menuFooter }) => (
    <div id={id} className="nv-header__menu-panel">
        <div className="nv-header__menu-content">
            <nav aria-label={translate("mainNavigation")}>
                <NavigationList items={items} currentHref={currentHref} layout={NavigationLayout.Menu} />
            </nav>
            {menuFooter && <div className="nv-header__menu-footer">{menuFooter}</div>}
        </div>
    </div>
);

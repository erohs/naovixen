import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import { NavigationLayout } from "../navigation-list/enums/NavigationLayout";
import { NavigationList } from "../navigation-list/NavigationList.component";
import { translate } from "../translate/Translate.const";
import { HeaderHome } from "./HeaderHome.component";
import { HeaderMenu } from "./HeaderMenu.component";
import type { IHeaderProps } from "./interfaces/IHeaderProps";

/**
 * The logo linking home, then the navigation: a row on wide screens, a menu on narrow ones. Following a
 * link or going back closes the menu.
 */
export const Header: FunctionComponent<IHeaderProps> = ({
    logo,
    items,
    currentHref,
    actions,
    menuFooter,
    className,
    ...headerProps
}) => (
    <header {...headerProps} className={joinClassNames("nv-header", className)}>
        <HeaderHome logo={logo} currentHref={currentHref} />
        <nav aria-label={translate("mainNavigation")} className="nv-header__navigation">
            <NavigationList items={items} currentHref={currentHref} layout={NavigationLayout.Row} />
        </nav>
        {actions}
        <HeaderMenu items={items} currentHref={currentHref} menuFooter={menuFooter} />
    </header>
);

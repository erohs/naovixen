import type { ComponentPropsWithRef, FunctionComponent } from 'react';

import { Button } from '../button/Button.component';
import { NavigationLayout } from '../navigation-list/enums/NavigationLayout';
import { NavigationList } from '../navigation-list/NavigationList.component';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import { useHeaderMenu } from './functions/UseHeaderMenu.hook';
import type { IHeaderProps } from './interfaces/IHeaderProps';

/**
 * Named by a Button's hidden name, which makes it round like a Button of one icon. Its lines are
 * drawn here rather than as an icon, so they can fold into a cross.
 */
const MenuButton: FunctionComponent<ComponentPropsWithRef<'button'>> = (buttonProps) => (
    <Button {...buttonProps} className="nv-header__menu-button">
        <span className="nv-header__menu-lines" aria-hidden="true">
            <span className="nv-header__menu-line" />
            <span className="nv-header__menu-line" />
            <span className="nv-header__menu-line" />
        </span>
        <VisuallyHidden className="nv-button__name">Menu</VisuallyHidden>
    </Button>
);

/**
 * The header's navigation on narrow screens: a button that opens a panel over the page. The
 * panel follows the button, so Tab moves from one straight into the other.
 */
export const HeaderMenu: FunctionComponent<
    Pick<IHeaderProps, 'items' | 'currentHref' | 'menuFooter'>
> = ({ items, currentHref, menuFooter }) => {
    const { menuRef, buttonProps, panelId } = useHeaderMenu(currentHref);

    return (
        <div ref={menuRef} className="nv-header__menu">
            <MenuButton {...buttonProps} />
            <div id={panelId} className="nv-header__menu-panel">
                <div className="nv-header__menu-content">
                    <nav aria-label="Main">
                        <NavigationList
                            items={items}
                            currentHref={currentHref}
                            layout={NavigationLayout.Menu}
                        />
                    </nav>
                    {menuFooter && <div className="nv-header__menu-footer">{menuFooter}</div>}
                </div>
            </div>
        </div>
    );
};

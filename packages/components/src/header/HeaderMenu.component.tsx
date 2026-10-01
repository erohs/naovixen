import type { FunctionComponent } from 'react';

import { Button } from '../button/Button.component';
import { Disclosure } from '../disclosure/Disclosure.component';
import { closeIcon } from '../icon/icons/Close.icon';
import { menuIcon } from '../icon/icons/Menu.icon';
import { NavigationLayout } from '../navigation-list/enums/NavigationLayout';
import { NavigationList } from '../navigation-list/NavigationList.component';
import { useOpenOnPath } from './functions/UseOpenOnPath.hook';
import type { IHeaderProps } from './interfaces/IHeaderProps';

const MenuLabel: FunctionComponent<{ readonly isOpen: boolean }> = ({ isOpen }) => (
    <>
        <Button.Icon source={isOpen ? closeIcon : menuIcon} />
        Menu
    </>
);

/** The header's navigation on narrow screens, behind a button. Closes when the page changes. */
export const HeaderMenu: FunctionComponent<Pick<IHeaderProps, 'items' | 'currentHref'>> = ({
    items,
    currentHref,
}) => {
    const [isOpen, onOpenChange] = useOpenOnPath(currentHref);

    return (
        <Disclosure
            label={<MenuLabel isOpen={isOpen} />}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="nv-header__menu"
            buttonClassName="nv-header__menu-button"
            panelClassName="nv-header__menu-panel"
        >
            <nav aria-label="Main">
                <NavigationList
                    items={items}
                    currentHref={currentHref}
                    layout={NavigationLayout.Menu}
                />
            </nav>
        </Disclosure>
    );
};

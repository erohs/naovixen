import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { Disclosure } from '../disclosure/Disclosure.component';
import { Icon } from '../icon/Icon.component';
import { closeIcon } from '../icon/icons/Close.icon';
import { menuIcon } from '../icon/icons/Menu.icon';
import { NavigationLayout } from '../navigation-list/enums/NavigationLayout';
import { NavigationList } from '../navigation-list/NavigationList.component';
import { useOpenOnPath } from './functions/UseOpenOnPath.hook';
import type { IMobileMenuProps } from './interfaces/IMobileMenuProps';

const MenuLabel: FunctionComponent<{ readonly isOpen: boolean }> = ({ isOpen }) => (
    <>
        <Icon source={isOpen ? closeIcon : menuIcon} />
        Menu
    </>
);

/** Closes when the page changes. */
export const MobileMenu: FunctionComponent<IMobileMenuProps> = ({
    items,
    currentHref,
    className,
}) => {
    const [isOpen, onOpenChange] = useOpenOnPath(currentHref);

    return (
        <Disclosure
            label={<MenuLabel isOpen={isOpen} />}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className={joinClassNames('nv-mobile-menu', className)}
            buttonClassName="nv-mobile-menu__button"
            panelClassName="nv-mobile-menu__panel"
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

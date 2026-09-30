import type { FunctionComponent } from 'react';
import { closeIcon } from '../icon/icons/Close.icon';
import { Icon } from '../icon/Icon.component';
import { menuIcon } from '../icon/icons/Menu.icon';
import { joinClassNames } from '@naovixen/utilities';

import { Disclosure } from '../disclosure/Disclosure.component';
import { NavigationLayout } from '../navigation/enums/NavigationLayout';
import { Navigation } from '../navigation/Navigation.component';
import { useOpenOnPath } from './functions/UseOpenOnPath.hook';
import type { IMobileMenuProps } from './interfaces/IMobileMenuProps';

/** Closes when the page changes. */
export const MobileMenu: FunctionComponent<IMobileMenuProps> = ({
    className,
    ...navigationProps
}) => {
    const [isOpen, onOpenChange] = useOpenOnPath(navigationProps.currentHref);

    return (
        <Disclosure
            label={
                <>
                    <Icon source={isOpen ? closeIcon : menuIcon} />
                    Menu
                </>
            }
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className={joinClassNames('nv-mobile-menu', className)}
            buttonClassName="nv-mobile-menu__button"
            panelClassName="nv-mobile-menu__panel"
        >
            <Navigation {...navigationProps} layout={NavigationLayout.Stacked} />
        </Disclosure>
    );
};

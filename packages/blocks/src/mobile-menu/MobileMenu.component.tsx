import type { FunctionComponent } from 'react';
import { closeIcon, Icon, menuIcon } from '@naovixen/components';
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
            className={joinClassNames('nx-mobile-menu', className)}
            buttonClassName="nx-mobile-menu__button"
            panelClassName="nx-mobile-menu__panel"
        >
            <Navigation {...navigationProps} layout={NavigationLayout.Stacked} />
        </Disclosure>
    );
};

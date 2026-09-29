import type { FunctionComponent } from 'react';
import { Disclosure } from '@naovixen/blocks';
import { closeIcon, Icon, menuIcon } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import { SiteNavigationLayout } from '../site-navigation/enums/SiteNavigationLayout';
import { SiteNavigation } from '../site-navigation/SiteNavigation.component';
import { useOpenOnPath } from './functions/UseOpenOnPath.hook';
import type { IMobileMenuProps } from './interfaces/IMobileMenuProps';

/** Closes when the path changes. */
export const MobileMenu: FunctionComponent<IMobileMenuProps> = ({
    className,
    ...navigationProps
}) => {
    const [isOpen, onOpenChange] = useOpenOnPath(navigationProps.currentPath);

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
            <SiteNavigation {...navigationProps} layout={SiteNavigationLayout.Stacked} />
        </Disclosure>
    );
};

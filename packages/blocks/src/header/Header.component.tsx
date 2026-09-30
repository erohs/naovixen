import type { FunctionComponent } from 'react';
import { Link } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import { Logo } from '../logo/Logo.component';
import { MobileMenu } from '../mobile-menu/MobileMenu.component';
import { Navigation } from '../navigation/Navigation.component';
import type { IHeaderProps } from './interfaces/IHeaderProps';

/**
 * The logo linking home, then the navigation: a row on wide screens, a menu on narrow ones.
 * The home link's name is the visible "naovixen", so voice control finds it.
 */
export const Header: FunctionComponent<IHeaderProps> = ({
    actions,
    className,
    ...navigationProps
}) => {
    const LinkComponent = navigationProps.linkComponent ?? Link;

    return (
        <header className={joinClassNames('nv-header', className)}>
            <LinkComponent href="/" className="nv-header__home">
                <Logo />
            </LinkComponent>
            <div className="nv-header__navigation">
                <Navigation {...navigationProps} />
            </div>
            {actions}
            <div className="nv-header__menu">
                <MobileMenu {...navigationProps} />
            </div>
        </header>
    );
};

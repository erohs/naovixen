import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { Link } from '../link/Link.component';
import { Logo } from '../logo/Logo.component';
import { MobileMenu } from '../mobile-menu/MobileMenu.component';
import { NavigationLayout } from '../navigation-list/enums/NavigationLayout';
import { NavigationList } from '../navigation-list/NavigationList.component';
import type { IHeaderProps } from './interfaces/IHeaderProps';

/**
 * The logo linking home, then the navigation: a row on wide screens, a menu on narrow ones.
 * The home link's name is the visible "naovixen", so voice control finds it.
 */
export const Header: FunctionComponent<IHeaderProps> = ({
    items,
    currentHref,
    actions,
    className,
}) => (
    <header className={joinClassNames('nv-header', className)}>
        <Link href="/" className="nv-header__home">
            <Logo />
        </Link>
        <nav aria-label="Main" className="nv-header__navigation">
            <NavigationList items={items} currentHref={currentHref} layout={NavigationLayout.Row} />
        </nav>
        {actions}
        <div className="nv-header__menu">
            <MobileMenu items={items} currentHref={currentHref} />
        </div>
    </header>
);

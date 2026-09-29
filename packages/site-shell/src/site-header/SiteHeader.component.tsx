import type { FunctionComponent } from 'react';
import { Logo } from '@naovixen/brand';
import { joinClassNames } from '@naovixen/formatting';
import { Container } from '@naovixen/layout';

import { MobileMenu } from '../mobile-menu/MobileMenu.component';
import { SiteNavigation } from '../site-navigation/SiteNavigation.component';
import { ThemeToggle } from '../theme-toggle/ThemeToggle.component';
import type { ISiteHeaderProps } from './interfaces/ISiteHeaderProps';

/** Needs a ThemeProvider above it, for the theme toggle. */
export const SiteHeader: FunctionComponent<ISiteHeaderProps> = ({
    navigationItems,
    currentPath,
    linkComponent,
    className,
}) => {
    const navigationProps = { items: navigationItems, currentPath, linkComponent };

    return (
        <Container as="header" className={joinClassNames('nx-site-header', className)}>
            <div className="nx-site-header__home">
                <Logo linkComponent={linkComponent} />
            </div>
            <div className="nx-site-header__navigation">
                <SiteNavigation {...navigationProps} />
            </div>
            <ThemeToggle />
            <div className="nx-site-header__menu">
                <MobileMenu {...navigationProps} />
            </div>
        </Container>
    );
};

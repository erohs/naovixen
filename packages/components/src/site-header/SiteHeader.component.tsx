import type { FunctionComponent } from 'react';

import { Logo } from '../logo/Logo.component';
import { MobileMenu } from '../mobile-menu/MobileMenu.component';
import { SiteNavigation } from '../site-navigation/SiteNavigation.component';
import { ThemeToggle } from '../theme-toggle/ThemeToggle.component';
import type { ISiteHeaderProps } from './interfaces/ISiteHeaderProps';

/** Wide screens show the navigation in the row; narrow ones fold it behind the menu button. */
export const SiteHeader: FunctionComponent<ISiteHeaderProps> = ({
  navigationItems,
  currentPath,
}) => (
  <header className="nx-container nx-site-header">
    <div className="nx-site-header__home">
      <Logo />
    </div>
    <div className="nx-site-header__navigation">
      <SiteNavigation items={navigationItems} currentPath={currentPath} />
    </div>
    <ThemeToggle />
    <div className="nx-site-header__menu">
      <MobileMenu items={navigationItems} currentPath={currentPath} />
    </div>
  </header>
);

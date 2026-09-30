import type { FunctionComponent } from 'react';
import { useLocation } from '@tanstack/react-router';
import { BackToTop, Header, RouteAnnouncer } from '@naovixen/blocks';
import { SkipLink, ThemeToggle, useDocumentTheme } from '@naovixen/components';

import { navigationItems } from '../../constants/NavigationItems.const';
import { PortfolioFooter } from '../portfolio-footer/PortfolioFooter.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import { useNavigationAnnouncement } from './functions/UseNavigationAnnouncement.hook';
import type { ISiteFrameProps } from './interfaces/ISiteFrameProps';

/** Everything around a page's content. Needs a ThemeProvider above it. */
export const SiteFrame: FunctionComponent<ISiteFrameProps> = ({ year, children }) => {
    const currentPath = useLocation({ select: (location) => location.pathname });
    const announcement = useNavigationAnnouncement();
    useDocumentTheme();

    return (
        <div className="nx-site-frame">
            <SkipLink href="#main">Skip to content</SkipLink>
            <Header
                items={navigationItems}
                currentHref={currentPath}
                linkComponent={RoutedLink}
                actions={<ThemeToggle />}
            />
            <main id="main" tabIndex={-1} className="nx-site-frame__main">
                {children}
            </main>
            <PortfolioFooter currentPath={currentPath} year={year} />
            <BackToTop />
            <RouteAnnouncer message={announcement} />
        </div>
    );
};

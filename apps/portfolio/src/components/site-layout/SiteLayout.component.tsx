import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { useLocation } from '@tanstack/react-router';
import {
    BackToTop,
    Header,
    LinkProvider,
    RouteAnnouncer,
    SkipLink,
    ThemeProvider,
    ThemeToggle,
    useDocumentTheme,
} from '@naovixen/components';

import { navigationItems } from '../../constants/NavigationItems.const';
import { createThemeController } from '../../functions/CreateThemeController.function';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import { SiteFooter } from '../site-footer/SiteFooter.component';
import { useNavigationAnnouncement } from './functions/UseNavigationAnnouncement.hook';
import type { ISiteLayoutProps } from './interfaces/ISiteLayoutProps';

/** Everything around a page's content. */
const SiteFrame: FunctionComponent<ISiteLayoutProps> = ({ year, children }) => {
    const currentPath = useLocation({ select: (location) => location.pathname });
    const announcement = useNavigationAnnouncement();
    useDocumentTheme();

    return (
        <div className="nv-site-layout">
            <SkipLink href="#main">Skip to content</SkipLink>
            <Header items={navigationItems} currentHref={currentPath} actions={<ThemeToggle />} />
            <main id="main" tabIndex={-1} className="nv-site-layout__main">
                {children}
            </main>
            <SiteFooter currentPath={currentPath} year={year} />
            <BackToTop />
            <RouteAnnouncer message={announcement} />
        </div>
    );
};

/** The providers the frame and the pages need, then the frame. */
export const SiteLayout: FunctionComponent<ISiteLayoutProps> = (frameProps) => {
    const [themeController] = useState(createThemeController);

    return (
        <ThemeProvider themeController={themeController}>
            <LinkProvider linkComponent={RoutedLink}>
                <SiteFrame {...frameProps} />
            </LinkProvider>
        </ThemeProvider>
    );
};

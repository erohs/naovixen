import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { useLocation } from '@tanstack/react-router';
import {
    BackToTop,
    downloadIcon,
    ExclamationBubble,
    Header,
    Link,
    LinkButton,
    LinkProvider,
    LinkVariant,
    RouteAnnouncer,
    SkipLink,
    ThemeProvider,
    ThemeToggle,
    useDocumentTheme,
} from '@naovixen/components';

import { navigationItems } from '../../constants/NavigationItems.const';
import { placeholderContactLinks } from '../../constants/PlaceholderContactLinks.const';
import { placeholderContactPage } from '../../constants/PlaceholderContactPage.const';
import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { createThemeController } from '../../functions/CreateThemeController.function';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import { SiteFooter } from '../site-footer/SiteFooter.component';
import { useNavigationAnnouncement } from './functions/UseNavigationAnnouncement.hook';
import type { ISiteLayoutProps } from './interfaces/ISiteLayoutProps';

/** Profiles on other sites and the CV, each a round button named by its icon's label. */
const ElsewhereList: FunctionComponent = () => (
    <ul aria-label="Elsewhere" className="nv-site-layout__elsewhere">
        {placeholderContactLinks.map((contactLink) => (
            <li key={contactLink.url}>
                <LinkButton href={contactLink.url}>
                    <LinkButton.Icon source={contactLink.icon} label={contactLink.label} />
                </LinkButton>
            </li>
        ))}
        <li>
            <LinkButton href={placeholderCvPath} download>
                <LinkButton.Icon source={downloadIcon} label="Download CV (PDF)" />
            </LinkButton>
        </li>
    </ul>
);

/** Ways to get in touch, beneath the links in the narrow-screen menu. */
const MenuFooter: FunctionComponent = () => (
    <div className="nv-site-layout__menu-footer">
        <ExclamationBubble>{placeholderContactPage.greeting}</ExclamationBubble>
        <Link
            href={`mailto:${placeholderEmailAddress}`}
            variant={LinkVariant.Standalone}
            className="nv-site-layout__email"
        >
            {placeholderEmailAddress}
        </Link>
        <ElsewhereList />
    </div>
);

/** Everything around a page's content. */
const SiteFrame: FunctionComponent<ISiteLayoutProps> = ({ year, children }) => {
    const currentPath = useLocation({ select: (location) => location.pathname });
    const announcement = useNavigationAnnouncement();
    useDocumentTheme();

    return (
        <div className="nv-site-layout">
            <SkipLink href="#main">Skip to content</SkipLink>
            <Header
                items={navigationItems}
                currentHref={currentPath}
                actions={<ThemeToggle />}
                menuFooter={<MenuFooter />}
            />
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

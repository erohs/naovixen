import type { FunctionComponent } from 'react';
import { FoxMascot } from '@naovixen/brand';
import { SiteFooter } from '@naovixen/site-shell';

import { navigationItems } from '../../constants/NavigationItems.const';
import { placeholderFooterBlurb } from '../../constants/PlaceholderFooterBlurb.const';
import { placeholderSocialLinks } from '../../constants/PlaceholderSocialLinks.const';
import { privacyLink } from '../../constants/PrivacyLink.const';
import { site } from '../../constants/Site.const';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import type { IPortfolioFooterProps } from './interfaces/IPortfolioFooterProps';

/** The fox peeks over the footer on every page but home, as in the design. */
export const PortfolioFooter: FunctionComponent<IPortfolioFooterProps> = ({
    currentPath,
    year,
}) => (
    <SiteFooter
        blurb={placeholderFooterBlurb}
        navigationItems={navigationItems}
        socialLinks={placeholderSocialLinks}
        currentPath={currentPath}
        linkComponent={RoutedLink}
        copyrightHolder={site.name}
        year={year}
        privacyLink={privacyLink}
        mascot={currentPath === '/' ? undefined : <FoxMascot />}
    />
);

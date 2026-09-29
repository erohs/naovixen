import type { FunctionComponent } from 'react';
import { SiteFooter } from '@naovixen/site-shell';

import { navigationItems } from '../../constants/NavigationItems.const';
import { placeholderFooterBlurb } from '../../constants/PlaceholderFooterBlurb.const';
import { placeholderSocialLinks } from '../../constants/PlaceholderSocialLinks.const';
import { privacyLink } from '../../constants/PrivacyLink.const';
import { site } from '../../constants/Site.const';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import type { IPortfolioFooterProps } from './interfaces/IPortfolioFooterProps';

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
    />
);

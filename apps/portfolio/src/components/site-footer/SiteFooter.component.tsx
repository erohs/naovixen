import type { FunctionComponent } from 'react';
import {
    Footer,
    FooterColumn,
    Logo,
    navigationLinkClassName,
    NavigationList,
    SocialLinkList,
    Text,
    TextVariant,
} from '@naovixen/components';

import { navigationItems } from '../../constants/NavigationItems.const';
import { privacyLink } from '../../constants/PrivacyLink.const';
import { site } from '../../constants/Site.const';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import { placeholderFooterBlurb } from './constants/PlaceholderFooterBlurb.const';
import { placeholderSocialLinks } from './constants/PlaceholderSocialLinks.const';
import type { ISiteFooterProps } from './interfaces/ISiteFooterProps';

const SmallPrint: FunctionComponent<Pick<ISiteFooterProps, 'year'>> = ({ year }) => (
    <>
        <p>
            © {year} {site.name}
        </p>
        <RoutedLink href={privacyLink.href} className={navigationLinkClassName}>
            {privacyLink.label}
        </RoutedLink>
    </>
);

export const SiteFooter: FunctionComponent<ISiteFooterProps> = ({ currentPath, year }) => (
    <Footer smallPrint={<SmallPrint year={year} />}>
        <div className="nv-site-footer__about">
            <Logo />
            <Text variant={TextVariant.Small}>{placeholderFooterBlurb}</Text>
        </div>
        <FooterColumn heading="site">
            <NavigationList
                items={navigationItems}
                currentHref={currentPath}
                linkComponent={RoutedLink}
            />
        </FooterColumn>
        <FooterColumn heading="elsewhere">
            <SocialLinkList links={placeholderSocialLinks} />
        </FooterColumn>
    </Footer>
);

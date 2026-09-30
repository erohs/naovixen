import type { FunctionComponent } from 'react';
import { Footer, FooterColumn, Logo, NavigationList, SocialLinkList } from '@naovixen/blocks';
import { navigationLinkClassName, Text, TextVariant } from '@naovixen/components';
import { Stack } from '@naovixen/layout';

import { navigationItems } from '../../constants/NavigationItems.const';
import { placeholderFooterBlurb } from '../../constants/PlaceholderFooterBlurb.const';
import { placeholderSocialLinks } from '../../constants/PlaceholderSocialLinks.const';
import { privacyLink } from '../../constants/PrivacyLink.const';
import { site } from '../../constants/Site.const';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import type { IPortfolioFooterProps } from './interfaces/IPortfolioFooterProps';

const SmallPrint: FunctionComponent<Pick<IPortfolioFooterProps, 'year'>> = ({ year }) => (
    <>
        <p>
            © {year} {site.name}
        </p>
        <RoutedLink href={privacyLink.href} className={navigationLinkClassName}>
            {privacyLink.label}
        </RoutedLink>
    </>
);

export const PortfolioFooter: FunctionComponent<IPortfolioFooterProps> = ({
    currentPath,
    year,
}) => (
    <Footer smallPrint={<SmallPrint year={year} />}>
        <Stack>
            <Logo />
            <Text variant={TextVariant.Small}>{placeholderFooterBlurb}</Text>
        </Stack>
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

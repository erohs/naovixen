import type { FunctionComponent } from 'react';
import { Footer, Link, LinkVariant, Logo, Text, TextVariant } from '@naovixen/components';

import { navigationItems } from '../../constants/NavigationItems.const';
import { privacyLink } from '../../constants/PrivacyLink.const';
import { site } from '../../constants/Site.const';
import { placeholderFooterBlurb } from './constants/PlaceholderFooterBlurb.const';
import { placeholderSocialLinks } from './constants/PlaceholderSocialLinks.const';
import type { ISiteFooterProps } from './interfaces/ISiteFooterProps';

const SmallPrint: FunctionComponent<Pick<ISiteFooterProps, 'year'>> = ({ year }) => (
    <>
        <p>
            © {year} {site.name}
        </p>
        <Link href={privacyLink.href} variant={LinkVariant.Navigation}>
            {privacyLink.label}
        </Link>
    </>
);

export const SiteFooter: FunctionComponent<ISiteFooterProps> = ({ currentPath, year }) => (
    <Footer smallPrint={<SmallPrint year={year} />}>
        <div className="nv-site-footer__about">
            <Logo />
            <Text variant={TextVariant.Small}>{placeholderFooterBlurb}</Text>
        </div>
        <Footer.Column heading="site" links={navigationItems} currentHref={currentPath} />
        <Footer.Column heading="elsewhere" links={placeholderSocialLinks} />
    </Footer>
);

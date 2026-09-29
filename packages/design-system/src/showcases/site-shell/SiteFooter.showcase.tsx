import { SiteFooter } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';
import { exampleNavigationItems } from './ExampleNavigationItems.const';
import { exampleSocialLinks } from './ExampleSocialLinks.const';

export const siteFooterShowcase: IShowcase = {
    name: 'SiteFooter',
    examples: [
        {
            name: 'Default',
            render: () => (
                <SiteFooter
                    blurb="An example line about the site."
                    navigationItems={exampleNavigationItems}
                    socialLinks={exampleSocialLinks}
                    copyrightHolder="Example Name"
                    year={2026}
                    privacyLink={{ label: 'Privacy notice', path: '/privacy' }}
                    currentPath="/"
                />
            ),
        },
    ],
};

import { SiteFooterDirectory } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';
import { exampleNavigationItems } from './ExampleNavigationItems.const';
import { exampleSocialLinks } from './ExampleSocialLinks.const';

export const siteFooterDirectoryShowcase: IShowcase = {
    name: 'SiteFooterDirectory',
    examples: [
        {
            name: 'Wordmark, site links and elsewhere',
            render: () => (
                <SiteFooterDirectory
                    blurb="An example line about the site."
                    navigationItems={exampleNavigationItems}
                    socialLinks={exampleSocialLinks}
                    currentPath="/"
                />
            ),
        },
    ],
};

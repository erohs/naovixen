import type { ReactNode } from 'react';
import { FoxMascot } from '@naovixen/brand';
import { SiteFooter } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';
import { exampleNavigationItems } from './ExampleNavigationItems.const';
import { exampleSocialLinks } from './ExampleSocialLinks.const';

const renderFooter = (withMascot: boolean): ReactNode => (
    <SiteFooter
        blurb="An example line about the site."
        navigationItems={exampleNavigationItems}
        socialLinks={exampleSocialLinks}
        copyrightHolder="Example Name"
        year={2026}
        privacyLink={{ label: 'Privacy notice', path: '/privacy' }}
        currentPath="/"
        mascot={withMascot ? <FoxMascot /> : undefined}
    />
);

export const siteFooterShowcase: IShowcase = {
    name: 'SiteFooter',
    examples: [
        { name: 'Default', render: () => renderFooter(false) },
        { name: 'With the fox peeking over', render: () => renderFooter(true) },
    ],
};

import { SiteNavigation, SiteNavigationLayout } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';
import { exampleNavigationItems } from './ExampleNavigationItems.const';

export const siteNavigationShowcase: IShowcase = {
    name: 'SiteNavigation',
    examples: Object.values(SiteNavigationLayout).map((layout) => ({
        name: `Layout: ${layout}`,
        render: () => (
            <SiteNavigation items={exampleNavigationItems} currentPath="/blog" layout={layout} />
        ),
    })),
};

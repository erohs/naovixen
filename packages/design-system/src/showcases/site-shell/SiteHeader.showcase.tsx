import { SiteHeader } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';
import { exampleNavigationItems } from './ExampleNavigationItems.const';

/** Needs the page's ThemeProvider, for its theme toggle. */
export const siteHeaderShowcase: IShowcase = {
    name: 'SiteHeader',
    examples: [
        {
            name: 'Inside the Work section',
            render: () => (
                <SiteHeader navigationItems={exampleNavigationItems} currentPath="/work/example" />
            ),
        },
    ],
};

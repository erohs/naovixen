import { MobileMenu } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';
import { exampleNavigationItems } from './ExampleNavigationItems.const';

export const mobileMenuShowcase: IShowcase = {
    name: 'MobileMenu',
    examples: [
        {
            name: 'Press Menu to open',
            render: () => <MobileMenu items={exampleNavigationItems} currentPath="/" />,
        },
    ],
};

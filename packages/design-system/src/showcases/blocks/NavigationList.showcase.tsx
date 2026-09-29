import { NavigationList } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

const items = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
];

export const navigationListShowcase: IShowcase = {
    name: 'NavigationList',
    examples: [
        {
            name: 'Inside a section, the section is current',
            render: () => (
                <nav aria-label="Example">
                    <NavigationList items={items} currentHref="/work/example-project" />
                </nav>
            ),
        },
    ],
};

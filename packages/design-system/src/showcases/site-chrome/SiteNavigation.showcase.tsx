import type { IShowcase } from '../interfaces/IShowcase';
import { SiteNavigation } from './SiteNavigation.component';

const items = [
  { label: 'Home', path: '/' },
  { label: 'Example section', path: '/example' },
  { label: 'Another section', path: '/another' },
];

export const siteNavigationShowcase: IShowcase = {
  name: 'SiteNavigation',
  examples: [
    { name: 'In a row', render: () => <SiteNavigation items={items} currentPath="/example" /> },
    {
      name: 'Stacked',
      render: () => <SiteNavigation items={items} currentPath="/example" isStacked />,
    },
  ],
};

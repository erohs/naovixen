import type { IShowcase } from '../interfaces/IShowcase';
import { SiteHeader } from './SiteHeader.component';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Example section', path: '/example' },
  { label: 'Another section', path: '/another' },
];

export const siteHeaderShowcase: IShowcase = {
  name: 'SiteHeader',
  examples: [
    {
      name: 'On a section page',
      render: () => <SiteHeader navigationItems={navigationItems} currentPath="/example" />,
    },
  ],
};

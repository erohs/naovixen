import type { IShowcase } from '../interfaces/IShowcase';
import { NavigationList } from './NavigationList.component';

const items = [
  { label: 'Home', path: '/' },
  { label: 'Example section', path: '/example' },
];

export const navigationListShowcase: IShowcase = {
  name: 'NavigationList',
  examples: [
    {
      name: 'On the home page',
      render: () => <NavigationList items={items} currentPath="/" />,
    },
    {
      name: 'On a page beneath a section',
      render: () => <NavigationList items={items} currentPath="/example/page" />,
    },
  ],
};

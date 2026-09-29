import type { IShowcase } from '../interfaces/IShowcase';
import { MobileMenu } from './MobileMenu.component';

const items = [
  { label: 'Home', path: '/' },
  { label: 'Example section', path: '/example' },
];

/** Starts closed; pressing the button in the showcase opens it. */
export const mobileMenuShowcase: IShowcase = {
  name: 'MobileMenu',
  examples: [{ name: 'Closed', render: () => <MobileMenu items={items} currentPath="/" /> }],
};

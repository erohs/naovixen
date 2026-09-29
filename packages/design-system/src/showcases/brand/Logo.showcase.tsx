import type { IShowcase } from '../interfaces/IShowcase';
import { Logo } from './Logo.component';

export const logoShowcase: IShowcase = {
  name: 'Logo',
  examples: [{ name: 'Default', render: () => <Logo /> }],
};

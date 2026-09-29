import { Logo } from '@naovixen/brand';

import type { IShowcase } from '../../interfaces/IShowcase';

export const logoShowcase: IShowcase = {
    name: 'Logo',
    examples: [{ name: 'Default', render: () => <Logo /> }],
};

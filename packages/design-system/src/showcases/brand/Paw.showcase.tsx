import { Paw } from '@naovixen/brand';

import type { IShowcase } from '../../interfaces/IShowcase';

export const pawShowcase: IShowcase = {
    name: 'Paw',
    examples: [{ name: 'Default', render: () => <Paw /> }],
};

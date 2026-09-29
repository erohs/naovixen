import { Heart } from '@naovixen/brand';

import type { IShowcase } from '../../interfaces/IShowcase';

export const heartShowcase: IShowcase = {
    name: 'Heart',
    examples: [{ name: 'Default', render: () => <Heart /> }],
};

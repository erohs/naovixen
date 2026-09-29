import { Wordmark } from '@naovixen/brand';

import type { IShowcase } from '../../interfaces/IShowcase';

export const wordmarkShowcase: IShowcase = {
    name: 'Wordmark',
    examples: [{ name: 'Default', render: () => <Wordmark /> }],
};

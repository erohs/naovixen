import { FoxMascot } from '@naovixen/brand';

import type { IShowcase } from '../../interfaces/IShowcase';

export const foxMascotShowcase: IShowcase = {
    name: 'FoxMascot',
    examples: [{ name: 'Default', render: () => <FoxMascot /> }],
};

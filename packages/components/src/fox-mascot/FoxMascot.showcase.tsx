import type { IShowcase } from '../interfaces/IShowcase';
import { FoxMascot } from './FoxMascot.component';

export const foxMascotShowcase: IShowcase = {
  name: 'FoxMascot',
  examples: [{ name: 'Default', render: () => <FoxMascot /> }],
};

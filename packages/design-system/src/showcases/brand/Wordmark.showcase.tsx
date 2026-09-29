import type { IShowcase } from '../interfaces/IShowcase';
import { Wordmark } from './Wordmark.component';

export const wordmarkShowcase: IShowcase = {
  name: 'Wordmark',
  examples: [{ name: 'Default', render: () => <Wordmark /> }],
};

import type { IShowcase } from '../interfaces/IShowcase';
import { Paw } from './Paw.component';

export const pawShowcase: IShowcase = {
  name: 'Paw',
  examples: [
    { name: 'Default', render: () => <Paw /> },
    {
      name: 'Beside text',
      render: () => (
        <p>
          Example text <Paw />
        </p>
      ),
    },
  ],
};

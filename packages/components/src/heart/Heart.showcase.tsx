import type { IShowcase } from '../interfaces/IShowcase';
import { Heart } from './Heart.component';

export const heartShowcase: IShowcase = {
  name: 'Heart',
  examples: [
    { name: 'Default', render: () => <Heart /> },
    {
      name: 'Beside text',
      render: () => (
        <p>
          Example text <Heart />
        </p>
      ),
    },
  ],
};

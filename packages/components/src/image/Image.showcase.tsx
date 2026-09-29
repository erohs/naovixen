import type { IShowcase } from '../interfaces/IShowcase';
import { Image } from './Image.component';

export const imageShowcase: IShowcase = {
  name: 'Image',
  examples: [
    {
      name: 'Default',
      render: () => (
        <Image
          image={{
            src: 'https://example.com/example-project.png',
            alt: 'Example project home page',
            width: 1600,
            height: 900,
          }}
        />
      ),
    },
  ],
};

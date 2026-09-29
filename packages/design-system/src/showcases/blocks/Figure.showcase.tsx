import type { IImage } from '@naovixen/models';

import { FigureShape } from '../enums/FigureShape';
import type { IShowcase } from '../interfaces/IShowcase';
import { Figure } from './Figure.component';

const exampleImage: IImage = {
  src: 'https://example.com/example-project.png',
  alt: 'Example project home page',
  width: 1600,
  height: 900,
};

export const figureShowcase: IShowcase = {
  name: 'Figure',
  examples: [
    { name: 'Wide', render: () => <Figure image={exampleImage} /> },
    {
      name: 'Wide, with a caption',
      render: () => <Figure image={exampleImage} caption="The example project's home page." />,
    },
    {
      name: 'Portrait',
      render: () => <Figure image={exampleImage} shape={FigureShape.Portrait} />,
    },
  ],
};

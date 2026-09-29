import { HeadingSize } from '../enums/HeadingSize';
import type { IShowcase } from '../interfaces/IShowcase';
import { Heading } from './Heading.component';

export const headingShowcase: IShowcase = {
  name: 'Heading',
  examples: [
    {
      name: 'Display size',
      render: () => (
        <Heading level={1} size={HeadingSize.Display}>
          Example page title
        </Heading>
      ),
    },
    { name: 'Level 1', render: () => <Heading level={1}>Example page title</Heading> },
    { name: 'Level 2', render: () => <Heading level={2}>Example section</Heading> },
    { name: 'Level 3', render: () => <Heading level={3}>Example project</Heading> },
    { name: 'Level 4', render: () => <Heading level={4}>Example detail</Heading> },
    {
      name: 'Level 3 at level 2 size',
      render: () => (
        <Heading level={3} size={HeadingSize.H2}>
          Example section
        </Heading>
      ),
    },
  ],
};

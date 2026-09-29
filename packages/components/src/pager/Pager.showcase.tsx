import type { IShowcase } from '../interfaces/IShowcase';
import { Pager } from './Pager.component';

const back = { label: 'All examples', path: '/example' };

export const pagerShowcase: IShowcase = {
  name: 'Pager',
  examples: [
    { name: 'Back only', render: () => <Pager back={back} /> },
    {
      name: 'Back and next',
      render: () => (
        <Pager back={back} next={{ label: 'Next: Example project', path: '/example/project' }} />
      ),
    },
  ],
};

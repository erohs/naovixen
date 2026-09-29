import type { IShowcase } from '../interfaces/IShowcase';
import { VisuallyHidden } from './VisuallyHidden.component';

export const visuallyHiddenShowcase: IShowcase = {
  name: 'VisuallyHidden',
  examples: [
    {
      name: 'Extra context for a link',
      render: () => (
        <a href="/">
          Read case study<VisuallyHidden>: Example project</VisuallyHidden>
        </a>
      ),
    },
  ],
};

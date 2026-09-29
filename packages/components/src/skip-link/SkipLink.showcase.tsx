import type { IShowcase } from '../interfaces/IShowcase';
import { SkipLink } from './SkipLink.component';

export const skipLinkShowcase: IShowcase = {
  name: 'SkipLink',
  examples: [
    { name: 'Default label (tab to it)', render: () => <SkipLink targetId="main" /> },
    {
      name: 'Custom label (tab to it)',
      render: () => <SkipLink targetId="example-section" label="Skip to example section" />,
    },
  ],
};

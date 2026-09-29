import type { IShowcase } from '../interfaces/IShowcase';
import { Callout } from './Callout.component';

export const calloutShowcase: IShowcase = {
  name: 'Callout',
  examples: [
    {
      name: 'Tip',
      render: () => (
        <Callout kind="tip!" title="Example title">
          <p>Example text that sits inside the callout.</p>
        </Callout>
      ),
    },
  ],
};

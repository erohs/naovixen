import { ButtonVariant } from '../enums/ButtonVariant';
import { IconName } from '../enums/IconName';
import type { IShowcase } from '../interfaces/IShowcase';
import { Button } from './Button.component';

export const buttonShowcase: IShowcase = {
  name: 'Button',
  examples: [
    { name: 'Primary', render: () => <Button variant={ButtonVariant.Primary}>Send</Button> },
    { name: 'Secondary', render: () => <Button>Cancel</Button> },
    {
      name: 'With an icon',
      render: () => <Button icon={IconName.ArrowUp}>Back to top</Button>,
    },
    {
      name: 'With a meta note',
      render: () => (
        <Button variant={ButtonVariant.Primary} meta="PDF" icon={IconName.Download}>
          Download
        </Button>
      ),
    },
  ],
};

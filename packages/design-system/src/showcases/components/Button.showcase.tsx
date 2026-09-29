import { arrowUpIcon, Button, ButtonVariant, downloadIcon, Icon } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const buttonShowcase: IShowcase = {
    name: 'Button',
    examples: [
        { name: 'Primary', render: () => <Button variant={ButtonVariant.Primary}>Send</Button> },
        { name: 'Secondary', render: () => <Button>Cancel</Button> },
        {
            name: 'With an icon',
            render: () => (
                <Button>
                    Back to top
                    <Icon source={arrowUpIcon} />
                </Button>
            ),
        },
        {
            name: 'Primary with an icon',
            render: () => (
                <Button variant={ButtonVariant.Primary}>
                    Download
                    <Icon source={downloadIcon} />
                </Button>
            ),
        },
        { name: 'Disabled', render: () => <Button disabled>Unavailable</Button> },
    ],
};

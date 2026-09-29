import { BusyButton, ButtonVariant } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const busyButtonShowcase: IShowcase = {
    name: 'BusyButton',
    examples: [
        {
            name: 'Idle',
            render: () => (
                <BusyButton isBusy={false} variant={ButtonVariant.Primary}>
                    Send
                </BusyButton>
            ),
        },
        {
            name: 'Busy',
            render: () => (
                <BusyButton isBusy variant={ButtonVariant.Primary}>
                    Sending
                </BusyButton>
            ),
        },
    ],
};

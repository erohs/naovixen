import { ToggleButton } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const toggleButtonShowcase: IShowcase = {
    name: 'ToggleButton',
    examples: [
        { name: 'Not pressed', render: () => <ToggleButton isPressed={false}>Bold</ToggleButton> },
        { name: 'Pressed', render: () => <ToggleButton isPressed>Bold</ToggleButton> },
    ],
};

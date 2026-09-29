import { arrowUpIcon, ButtonVariant, IconButton, menuIcon } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const iconButtonShowcase: IShowcase = {
    name: 'IconButton',
    examples: [
        { name: 'Secondary', render: () => <IconButton icon={menuIcon} label="Menu" /> },
        {
            name: 'Primary',
            render: () => (
                <IconButton
                    icon={arrowUpIcon}
                    label="Back to top"
                    variant={ButtonVariant.Primary}
                />
            ),
        },
    ],
};

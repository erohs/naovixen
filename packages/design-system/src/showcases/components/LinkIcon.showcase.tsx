import { arrowLeftIcon, arrowRightIcon, IconPosition, LinkIcon } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const linkIconShowcase: IShowcase = {
    name: 'LinkIcon',
    examples: [
        {
            name: 'Icon at the end',
            render: () => (
                <LinkIcon href="#example" icon={arrowRightIcon}>
                    All projects
                </LinkIcon>
            ),
        },
        {
            name: 'Icon at the start',
            render: () => (
                <LinkIcon href="#example" icon={arrowLeftIcon} iconPosition={IconPosition.Start}>
                    Back
                </LinkIcon>
            ),
        },
    ],
};

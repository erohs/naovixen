import { arrowRightIcon, ButtonVariant, Icon, LinkButton } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const linkButtonShowcase: IShowcase = {
    name: 'LinkButton',
    examples: [
        {
            name: 'Primary',
            render: () => (
                <LinkButton href="#example" variant={ButtonVariant.Primary}>
                    See the work
                    <Icon source={arrowRightIcon} />
                </LinkButton>
            ),
        },
        { name: 'Secondary', render: () => <LinkButton href="#example">Get in touch</LinkButton> },
    ],
};

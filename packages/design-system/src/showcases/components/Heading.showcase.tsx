import { Heading, HeadingSize } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const headingShowcase: IShowcase = {
    name: 'Heading',
    examples: [
        {
            name: 'Display size, level 1',
            render: () => (
                <Heading level={1} size={HeadingSize.Display}>
                    Display
                </Heading>
            ),
        },
        { name: 'Level 1', render: () => <Heading level={1}>Heading one</Heading> },
        { name: 'Level 2', render: () => <Heading level={2}>Heading two</Heading> },
        { name: 'Level 3', render: () => <Heading level={3}>Heading three</Heading> },
        { name: 'Level 4', render: () => <Heading level={4}>Heading four</Heading> },
        {
            name: 'Level 3 at level 2 size',
            render: () => (
                <Heading level={3} size={HeadingSize.H2}>
                    Looks like a two
                </Heading>
            ),
        },
    ],
};

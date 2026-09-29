import { SkipLink } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const skipLinkShowcase: IShowcase = {
    name: 'SkipLink',
    examples: [
        {
            name: 'Hidden until focused: press Tab',
            render: () => <SkipLink href="#example">Skip to content</SkipLink>,
        },
    ],
};

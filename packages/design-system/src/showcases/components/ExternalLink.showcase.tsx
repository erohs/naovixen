import { ExternalLink } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const externalLinkShowcase: IShowcase = {
    name: 'ExternalLink',
    examples: [
        {
            name: 'Another site',
            render: () => <ExternalLink href="https://example.com">Example site</ExternalLink>,
        },
    ],
};

import { LinkTile } from '@naovixen/blocks';
import {
    downloadIcon,
    ExternalLink,
    externalLinkIcon,
    gitHubIcon,
    mailIcon,
} from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const linkTileShowcase: IShowcase = {
    name: 'LinkTile',
    examples: [
        {
            name: 'Email',
            render: () => (
                <LinkTile
                    href="mailto:name@example.com"
                    icon={mailIcon}
                    label="Email"
                    detail="name@example.com"
                />
            ),
        },
        {
            name: 'Another site',
            render: () => (
                <LinkTile
                    href="https://example.com"
                    icon={gitHubIcon}
                    label="GitHub"
                    detail="example.com/example"
                    linkComponent={ExternalLink}
                    trailingIcon={externalLinkIcon}
                />
            ),
        },
        {
            name: 'A download',
            render: () => (
                <LinkTile
                    href="#example"
                    download
                    icon={downloadIcon}
                    label="Download"
                    detail="PDF"
                    trailingIcon={downloadIcon}
                />
            ),
        },
    ],
};

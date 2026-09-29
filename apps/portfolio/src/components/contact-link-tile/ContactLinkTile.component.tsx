import type { FunctionComponent } from 'react';
import { LinkTile } from '@naovixen/blocks';
import { ExternalLink, externalLinkIcon } from '@naovixen/components';

import type { IContactLinkTileProps } from './interfaces/IContactLinkTileProps';

/** A profile on another site, opened in a new tab. */
export const ContactLinkTile: FunctionComponent<IContactLinkTileProps> = ({ contactLink }) => (
    <LinkTile
        href={contactLink.url}
        label={contactLink.label}
        detail={contactLink.detail}
        icon={contactLink.icon}
        trailingIcon={externalLinkIcon}
        linkComponent={ExternalLink}
    />
);

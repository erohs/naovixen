import type { FunctionComponent } from 'react';
import { LinkTile } from '@naovixen/blocks';
import { downloadIcon } from '@naovixen/components';

import { placeholderContactLinks } from '../../constants/PlaceholderContactLinks.const';
import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { ContactLinkTile } from '../contact-link-tile/ContactLinkTile.component';

export const ContactLinkList: FunctionComponent = () => (
    <ul className="nx-contact-link-list">
        {placeholderContactLinks.map((contactLink) => (
            <li key={contactLink.url}>
                <ContactLinkTile contactLink={contactLink} />
            </li>
        ))}
        <li>
            <LinkTile
                href={placeholderCvPath}
                download
                label="Download CV"
                detail="PDF"
                icon={downloadIcon}
                trailingIcon={downloadIcon}
            />
        </li>
    </ul>
);

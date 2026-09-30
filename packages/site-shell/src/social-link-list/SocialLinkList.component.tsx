import type { FunctionComponent } from 'react';
import { ExternalLink, Link, navigationLinkClassName } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import { isEmailAddress } from './functions/IsEmailAddress.function';
import type { ISocialLinkListProps } from './interfaces/ISocialLinkListProps';

/** An email address opens the mail app in place; every other profile is another site. */
export const SocialLinkList: FunctionComponent<ISocialLinkListProps> = ({
    links,
    className,
    ...listProps
}) => (
    <ul {...listProps} className={joinClassNames('nx-social-link-list', className)}>
        {links.map((link) => (
            <li key={link.url}>
                {isEmailAddress(link.url) ? (
                    <Link href={link.url} className={navigationLinkClassName}>
                        {link.label}
                    </Link>
                ) : (
                    <ExternalLink href={link.url} className={navigationLinkClassName}>
                        {link.label}
                    </ExternalLink>
                )}
            </li>
        ))}
    </ul>
);

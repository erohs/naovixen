import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { ExternalLink } from '../external-link/ExternalLink.component';
import { navigationLinkClassName } from '../link/constants/NavigationLinkClassName.const';
import { Link } from '../link/Link.component';
import { isEmailAddress } from './functions/IsEmailAddress.function';
import type { ISocialLinkListProps } from './interfaces/ISocialLinkListProps';

/** An email address opens the mail app in place; every other profile is another site. */
export const SocialLinkList: FunctionComponent<ISocialLinkListProps> = ({
    links,
    className,
    ...listProps
}) => (
    <ul {...listProps} className={joinClassNames('nv-social-link-list', className)}>
        {links.map((link) => (
            <li key={link.href}>
                {isEmailAddress(link.href) ? (
                    <Link href={link.href} className={navigationLinkClassName}>
                        {link.label}
                    </Link>
                ) : (
                    <ExternalLink href={link.href} className={navigationLinkClassName}>
                        {link.label}
                    </ExternalLink>
                )}
            </li>
        ))}
    </ul>
);

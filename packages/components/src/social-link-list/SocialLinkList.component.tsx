import type { FunctionComponent } from 'react';

import { Link } from '../link/Link.component';
import { findSocialLinkDestination } from './functions/FindSocialLinkDestination.function';
import type { ISocialLinkListProps } from './interfaces/ISocialLinkListProps';

export const SocialLinkList: FunctionComponent<ISocialLinkListProps> = ({ links }) => (
  <ul className="nx-social-link-list">
    {links.map((link) => (
      <li key={link.url}>
        <Link href={link.url} destination={findSocialLinkDestination(link.url)}>
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

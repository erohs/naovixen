import type { FunctionComponent } from 'react';

import { isCurrentPath } from '../functions/IsCurrentPath.function';
import { Link } from '../link/Link.component';
import type { INavigationListProps } from './interfaces/INavigationListProps';

/** The links inside a navigation landmark. The landmark itself belongs to the caller. */
export const NavigationList: FunctionComponent<INavigationListProps> = ({ items, currentPath }) => (
  <ul className="nx-navigation-list">
    {items.map((item) => (
      <li key={item.path} className="nx-navigation-list__item">
        <Link href={item.path} isCurrent={isCurrentPath(currentPath, item.path)}>
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

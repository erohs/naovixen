import type { FunctionComponent } from 'react';

import { joinClassNames } from '../functions/JoinClassNames.function';
import { NavigationList } from '../navigation-list/NavigationList.component';
import type { ISiteNavigationProps } from './interfaces/ISiteNavigationProps';

export const SiteNavigation: FunctionComponent<ISiteNavigationProps> = ({
  items,
  currentPath,
  isStacked = false,
}) => (
  <nav
    aria-label="Main"
    className={joinClassNames('nx-site-navigation', isStacked && 'nx-site-navigation--stacked')}
  >
    <NavigationList items={items} currentPath={currentPath} />
  </nav>
);

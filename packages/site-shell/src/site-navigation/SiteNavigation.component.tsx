import type { FunctionComponent } from 'react';
import { NavigationList } from '@naovixen/blocks';
import { joinClassNames } from '@naovixen/utilities';

import { SiteNavigationLayout } from './enums/SiteNavigationLayout';
import { toNavigationListItems } from './functions/ToNavigationListItems.function';
import type { ISiteNavigationProps } from './interfaces/ISiteNavigationProps';

/** The site's main navigation landmark, named "Main" unless the caller names it. */
export const SiteNavigation: FunctionComponent<ISiteNavigationProps> = ({
    items,
    currentPath,
    linkComponent,
    layout = SiteNavigationLayout.Row,
    className,
    ...navProps
}) => (
    <nav
        aria-label="Main"
        {...navProps}
        className={joinClassNames('nx-site-navigation', `nx-site-navigation--${layout}`, className)}
    >
        <NavigationList
            items={toNavigationListItems(items)}
            currentHref={currentPath}
            linkComponent={linkComponent}
        />
    </nav>
);

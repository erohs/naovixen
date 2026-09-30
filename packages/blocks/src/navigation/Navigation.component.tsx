import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { NavigationList } from '../navigation-list/NavigationList.component';
import { NavigationLayout } from './enums/NavigationLayout';
import type { INavigationProps } from './interfaces/INavigationProps';

/** A navigation landmark, named "Main" unless the caller names it. */
export const Navigation: FunctionComponent<INavigationProps> = ({
    items,
    currentHref,
    linkComponent,
    layout = NavigationLayout.Row,
    className,
    ...navProps
}) => (
    <nav
        aria-label="Main"
        {...navProps}
        className={joinClassNames('nx-navigation', `nx-navigation--${layout}`, className)}
    >
        <NavigationList items={items} currentHref={currentHref} linkComponent={linkComponent} />
    </nav>
);

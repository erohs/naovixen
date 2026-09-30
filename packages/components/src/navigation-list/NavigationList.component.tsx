import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { navigationLinkClassName } from '../link/constants/NavigationLinkClassName.const';
import { Link } from '../link/Link.component';
import { NavigationLayout } from './enums/NavigationLayout';
import { isCurrentHref } from './functions/IsCurrentHref.function';
import type { INavigationListProps } from './interfaces/INavigationListProps';

/** The links inside a navigation landmark. The landmark itself belongs to the caller. */
export const NavigationList: FunctionComponent<INavigationListProps> = ({
    items,
    currentHref,
    layout = NavigationLayout.Column,
    className,
    ...listProps
}) => (
    <ul
        {...listProps}
        className={joinClassNames('nv-navigation-list', `nv-navigation-list--${layout}`, className)}
    >
        {items.map((item) => (
            <li key={item.href} className="nv-navigation-list__item">
                <Link
                    href={item.href}
                    className={navigationLinkClassName}
                    aria-current={isCurrentHref(currentHref, item.href) ? 'page' : undefined}
                >
                    {item.label}
                </Link>
            </li>
        ))}
    </ul>
);

import type { FunctionComponent } from 'react';
import { Link } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import { isCurrentHref } from './functions/IsCurrentHref.function';
import type { INavigationListProps } from './interfaces/INavigationListProps';

/** The links inside a navigation landmark. The landmark itself belongs to the caller. */
export const NavigationList: FunctionComponent<INavigationListProps> = ({
    items,
    currentHref,
    linkComponent = Link,
    className,
    ...listProps
}) => {
    const LinkComponent = linkComponent;

    return (
        <ul {...listProps} className={joinClassNames('nx-navigation-list', className)}>
            {items.map((item) => (
                <li key={item.href} className="nx-navigation-list__item">
                    <LinkComponent
                        href={item.href}
                        aria-current={isCurrentHref(currentHref, item.href) ? 'page' : undefined}
                    >
                        {item.label}
                    </LinkComponent>
                </li>
            ))}
        </ul>
    );
};

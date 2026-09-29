import type { FunctionComponent } from 'react';
import { Link } from '@naovixen/components';

import type { IBreadcrumbProps } from './interfaces/IBreadcrumbProps';

/** The separators between steps are drawn by the stylesheet and stay out of the name. */
export const Breadcrumb: FunctionComponent<IBreadcrumbProps> = ({
    trail,
    currentLabel,
    linkComponent = Link,
    ...navigationProps
}) => {
    const LinkComponent = linkComponent;

    return (
        <nav aria-label="Breadcrumb" {...navigationProps}>
            <ol className="nx-breadcrumb">
                {trail.map((item) => (
                    <li key={item.href} className="nx-breadcrumb__item">
                        <LinkComponent href={item.href} className="nx-breadcrumb__link">
                            {item.label}
                        </LinkComponent>
                    </li>
                ))}
                <li className="nx-breadcrumb__item" aria-current="page">
                    {currentLabel}
                </li>
            </ol>
        </nav>
    );
};

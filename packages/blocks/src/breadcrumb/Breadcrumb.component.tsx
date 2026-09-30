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
            <ol className="nv-breadcrumb">
                {trail.map((item) => (
                    <li key={item.href} className="nv-breadcrumb__item">
                        <LinkComponent href={item.href} className="nv-breadcrumb__link">
                            {item.label}
                        </LinkComponent>
                    </li>
                ))}
                <li className="nv-breadcrumb__item" aria-current="page">
                    {currentLabel}
                </li>
            </ol>
        </nav>
    );
};

import type { FunctionComponent } from 'react';

import { LinkVariant } from '../link/enums/LinkVariant';
import { Link } from '../link/Link.component';
import type { IBreadcrumbProps } from './interfaces/IBreadcrumbProps';

/** The separators between steps are drawn by the stylesheet and stay out of the name. */
export const Breadcrumb: FunctionComponent<IBreadcrumbProps> = ({
    trail,
    currentLabel,
    ...navigationProps
}) => (
    <nav aria-label="Breadcrumb" {...navigationProps}>
        <ol className="nv-breadcrumb">
            {trail.map((item) => (
                <li key={item.href} className="nv-breadcrumb__item">
                    <Link href={item.href} variant={LinkVariant.Standalone}>
                        {item.label}
                    </Link>
                </li>
            ))}
            <li className="nv-breadcrumb__item" aria-current="page">
                {currentLabel}
            </li>
        </ol>
    </nav>
);

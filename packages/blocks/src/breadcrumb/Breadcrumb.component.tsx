import type { FunctionComponent } from 'react';

import { Link } from '../link/Link.component';
import type { IBreadcrumbProps } from './interfaces/IBreadcrumbProps';

export const Breadcrumb: FunctionComponent<IBreadcrumbProps> = ({ trail, currentLabel }) => (
  <nav aria-label="Breadcrumb" className="nx-breadcrumb">
    <ol className="nx-breadcrumb__list">
      {trail.map((item) => (
        <li key={item.path} className="nx-breadcrumb__item">
          <Link href={item.path}>{item.label}</Link>
          <span className="nx-breadcrumb__separator" aria-hidden="true">
            /
          </span>
        </li>
      ))}
      <li className="nx-breadcrumb__item">
        <span className="nx-breadcrumb__current" aria-current="page">
          {currentLabel}
        </span>
      </li>
    </ol>
  </nav>
);

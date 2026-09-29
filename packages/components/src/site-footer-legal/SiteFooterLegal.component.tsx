import type { FunctionComponent } from 'react';

import { isCurrentPath } from '../functions/IsCurrentPath.function';
import { Link } from '../link/Link.component';
import type { ISiteFooterLegalProps } from './interfaces/ISiteFooterLegalProps';

export const SiteFooterLegal: FunctionComponent<ISiteFooterLegalProps> = ({
  copyrightHolder,
  year,
  privacyLink,
  currentPath,
}) => (
  <div className="nx-site-footer-legal">
    <p>
      © {year} {copyrightHolder}
    </p>
    <Link href={privacyLink.path} isCurrent={isCurrentPath(currentPath, privacyLink.path)}>
      {privacyLink.label}
    </Link>
  </div>
);

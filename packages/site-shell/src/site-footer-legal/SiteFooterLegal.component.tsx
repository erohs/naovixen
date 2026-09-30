import type { FunctionComponent } from 'react';
import { isCurrentHref } from '@naovixen/blocks';
import { Link, navigationLinkClassName } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import type { ISiteFooterLegalProps } from './interfaces/ISiteFooterLegalProps';

export const SiteFooterLegal: FunctionComponent<ISiteFooterLegalProps> = ({
    copyrightHolder,
    year,
    privacyLink,
    currentPath,
    linkComponent = Link,
    className,
}) => {
    const LinkComponent = linkComponent;

    return (
        <div className={joinClassNames('nx-site-footer-legal', className)}>
            <p>
                © {year} {copyrightHolder}
            </p>
            <LinkComponent
                href={privacyLink.path}
                className={navigationLinkClassName}
                aria-current={isCurrentHref(currentPath, privacyLink.path) ? 'page' : undefined}
            >
                {privacyLink.label}
            </LinkComponent>
        </div>
    );
};

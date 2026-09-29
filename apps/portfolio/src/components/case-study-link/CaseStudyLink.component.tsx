import type { FunctionComponent } from 'react';
import { arrowRightIcon, Icon, Link, VisuallyHidden } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import type { ICaseStudyLinkProps } from './interfaces/ICaseStudyLinkProps';

export const CaseStudyLink: FunctionComponent<ICaseStudyLinkProps> = ({
    projectTitle,
    linkComponent = Link,
    className,
    ...linkProps
}) => {
    const LinkComponent = linkComponent;

    return (
        <LinkComponent {...linkProps} className={joinClassNames('nx-case-study-link', className)}>
            Read case study<VisuallyHidden>: {projectTitle}</VisuallyHidden>
            <Icon source={arrowRightIcon} />
        </LinkComponent>
    );
};

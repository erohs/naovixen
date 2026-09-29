import type { FunctionComponent } from 'react';
import { arrowLeftIcon, arrowRightIcon, Icon, Link } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import type { IPaginationProps } from './interfaces/IPaginationProps';

export const Pagination: FunctionComponent<IPaginationProps> = ({
    back,
    next,
    linkComponent = Link,
    className,
    ...navigationProps
}) => {
    const LinkComponent = linkComponent;
    const navigationClassName = joinClassNames('nx-pagination', className);

    return (
        <nav aria-label="Pagination" {...navigationProps} className={navigationClassName}>
            <LinkComponent href={back.href} className="nx-pagination__link">
                <Icon source={arrowLeftIcon} />
                {back.label}
            </LinkComponent>
            {next && (
                <LinkComponent href={next.href} className="nx-pagination__link">
                    {next.label}
                    <Icon source={arrowRightIcon} />
                </LinkComponent>
            )}
        </nav>
    );
};

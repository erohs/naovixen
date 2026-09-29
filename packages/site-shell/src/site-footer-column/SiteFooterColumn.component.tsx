import type { FunctionComponent } from 'react';
import { useId } from 'react';
import { Heading, HeadingSize } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import type { ISiteFooterColumnProps } from './interfaces/ISiteFooterColumnProps';

export const SiteFooterColumn: FunctionComponent<ISiteFooterColumnProps> = ({
    heading,
    className,
    children,
    ...navProps
}) => {
    const headingId = useId();

    return (
        <nav
            {...navProps}
            className={joinClassNames('nx-site-footer-column', className)}
            aria-labelledby={headingId}
        >
            <Heading
                level={2}
                size={HeadingSize.H3}
                id={headingId}
                className="nx-site-footer-column__heading"
            >
                {heading}
            </Heading>
            {children}
        </nav>
    );
};

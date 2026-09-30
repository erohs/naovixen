import type { FunctionComponent } from 'react';
import { useId } from 'react';
import { Heading } from '../heading/Heading.component';
import { HeadingSize } from '../heading/enums/HeadingSize';
import { joinClassNames } from '@naovixen/utilities';

import type { IFooterColumnProps } from './interfaces/IFooterColumnProps';

export const FooterColumn: FunctionComponent<IFooterColumnProps> = ({
    heading,
    className,
    children,
    ...navProps
}) => {
    const headingId = useId();

    return (
        <nav
            {...navProps}
            className={joinClassNames('nv-footer-column', className)}
            aria-labelledby={headingId}
        >
            <Heading
                level={2}
                size={HeadingSize.H3}
                id={headingId}
                className="nv-footer-column__heading"
            >
                {heading}
            </Heading>
            {children}
        </nav>
    );
};

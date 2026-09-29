import type { FunctionComponent } from 'react';
import { SectionHeading } from '@naovixen/blocks';
import { joinClassNames } from '@naovixen/formatting';
import { Container } from '@naovixen/layout';

import type { IHomeSectionProps } from './interfaces/IHomeSectionProps';

/** One of the home page's sections: a heading, an optional link beside it, then the content. */
export const HomeSection: FunctionComponent<IHomeSectionProps> = ({
    heading,
    headingId,
    intro,
    action,
    className,
    children,
    ...containerProps
}) => (
    <Container
        {...containerProps}
        as="section"
        aria-labelledby={headingId}
        className={joinClassNames('nx-home-section', className)}
    >
        <div className="nx-home-section__header">
            <SectionHeading headingId={headingId} intro={intro}>
                {heading}
            </SectionHeading>
            {action}
        </div>
        {children}
    </Container>
);

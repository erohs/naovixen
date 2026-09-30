import type { FunctionComponent } from 'react';
import { Heading, HeadingSize } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import type { ISectionHeadingProps } from './interfaces/ISectionHeadingProps';

export const SectionHeading: FunctionComponent<ISectionHeadingProps> = ({
    level = 2,
    headingId,
    number,
    intro,
    className,
    children,
    ...divProps
}) => (
    <div {...divProps} className={joinClassNames('nx-section-heading', className)}>
        <div className="nx-section-heading__title">
            {number && (
                <span className="nx-section-heading__number" aria-hidden="true">
                    {number}
                </span>
            )}
            <Heading level={level} size={HeadingSize.H2} id={headingId}>
                {children}
            </Heading>
        </div>
        {intro && <p className="nx-section-heading__intro">{intro}</p>}
    </div>
);

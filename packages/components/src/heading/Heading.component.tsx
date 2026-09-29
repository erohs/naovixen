import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { headingElementByLevel } from './constants/HeadingElementByLevel.const';
import { headingSizeByLevel } from './constants/HeadingSizeByLevel.const';
import type { IHeadingProps } from './interfaces/IHeadingProps';

export const Heading: FunctionComponent<IHeadingProps> = ({
    level,
    size = headingSizeByLevel[level],
    className,
    children,
    ...headingProps
}) => {
    const HeadingElement = headingElementByLevel[level];

    return (
        <HeadingElement
            {...headingProps}
            className={joinClassNames('nx-heading', `nx-heading--${size}`, className)}
        >
            {children}
        </HeadingElement>
    );
};

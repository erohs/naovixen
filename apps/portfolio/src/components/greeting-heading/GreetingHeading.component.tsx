import type { FunctionComponent } from 'react';
import { Heading } from '@naovixen/components';

import type { IGreetingHeadingProps } from './interfaces/IGreetingHeadingProps';

/** A page's `<h1>`, with a speech bubble above it that is read first, as it is seen first. */
export const GreetingHeading: FunctionComponent<IGreetingHeadingProps> = ({
    greeting,
    children,
}) => (
    <div className="nv-greeting-heading">
        {greeting}
        <Heading level={1}>{children}</Heading>
    </div>
);

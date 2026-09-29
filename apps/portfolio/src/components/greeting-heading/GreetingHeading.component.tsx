import type { FunctionComponent } from 'react';
import { SpeechBubble } from '@naovixen/blocks';
import { Heading } from '@naovixen/components';

import type { IGreetingHeadingProps } from './interfaces/IGreetingHeadingProps';

/** A page's `<h1>`, with a speech bubble above it that is read first, as it is seen first. */
export const GreetingHeading: FunctionComponent<IGreetingHeadingProps> = ({
    greeting,
    children,
}) => (
    <div className="nx-greeting-heading">
        <SpeechBubble className="nx-greeting-heading__bubble">{greeting}</SpeechBubble>
        <Heading level={1}>{children}</Heading>
    </div>
);

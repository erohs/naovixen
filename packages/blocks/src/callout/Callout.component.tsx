import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import type { ICalloutProps } from './interfaces/ICalloutProps';

/** Not a landmark, so it stays in the flow. */
export const Callout: FunctionComponent<ICalloutProps> = ({
    kind,
    heading,
    className,
    children,
    ...divProps
}) => (
    <div role="note" {...divProps} className={joinClassNames('nx-callout', className)}>
        <p className="nx-callout__kind">{kind}</p>
        <p className="nx-callout__heading">{heading}</p>
        <div className="nx-callout__body">{children}</div>
    </div>
);

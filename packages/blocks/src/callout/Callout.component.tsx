import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { ICalloutProps } from './interfaces/ICalloutProps';

/** Not a landmark, so it stays in the flow. */
export const Callout: FunctionComponent<ICalloutProps> = ({
    kind,
    heading,
    className,
    children,
    ...divProps
}) => (
    <div role="note" {...divProps} className={joinClassNames('nv-callout', className)}>
        <p className="nv-callout__kind">{kind}</p>
        <p className="nv-callout__heading">{heading}</p>
        <div className="nv-callout__body">{children}</div>
    </div>
);

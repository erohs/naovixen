import type { FunctionComponent } from 'react';

import type { ICalloutProps } from './interfaces/ICalloutProps';

/** A note set apart from the text around it. Not a landmark, so it stays in the flow. */
export const Callout: FunctionComponent<ICalloutProps> = ({ kind, title, children }) => (
  <div className="nx-callout" role="note">
    <p className="nx-callout__kind">{kind}</p>
    <p className="nx-callout__title">{title}</p>
    <div className="nx-callout__body">{children}</div>
  </div>
);

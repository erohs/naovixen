import type { FunctionComponent } from 'react';

/** The brackets are drawing, so only the name itself is read out. */
export const Wordmark: FunctionComponent = () => (
  <span className="nx-wordmark">
    <span className="nx-wordmark__bracket" aria-hidden="true">
      &lt;
    </span>
    <span>naovixen</span>
    <span className="nx-wordmark__bracket" aria-hidden="true">
      /&gt;
    </span>
  </span>
);

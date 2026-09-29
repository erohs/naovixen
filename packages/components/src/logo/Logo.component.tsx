import type { FunctionComponent } from 'react';

import { Anchor } from '../anchor/Anchor.component';
import { Wordmark } from '../wordmark/Wordmark.component';

/** The wordmark as a link home. Its name is the visible "naovixen", so voice control finds it. */
export const Logo: FunctionComponent = () => (
  <Anchor href="/" className="nx-logo">
    <Wordmark />
    <span className="nx-logo__cursor" aria-hidden="true" />
  </Anchor>
);

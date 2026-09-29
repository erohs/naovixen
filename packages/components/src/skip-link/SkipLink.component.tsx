import type { FunctionComponent } from 'react';

import type { ISkipLinkProps } from './interfaces/ISkipLinkProps';

/** Render it first in the body. The target needs `tabIndex={-1}` to take focus. */
export const SkipLink: FunctionComponent<ISkipLinkProps> = ({
  targetId,
  label = 'Skip to content',
}) => (
  <a className="nx-skip-link" href={`#${targetId}`}>
    {label}
  </a>
);

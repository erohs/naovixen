import type { FunctionComponent } from 'react';

import { IconName } from '../enums/IconName';
import { Link } from '../link/Link.component';
import type { IPagerProps } from './interfaces/IPagerProps';

/** Back to the index at the start, onward to the next page at the end. */
export const Pager: FunctionComponent<IPagerProps> = ({ back, next }) => (
  <nav aria-label="Where next" className="nx-pager">
    <Link href={back.path} leadingIcon={IconName.ArrowLeft}>
      {back.label}
    </Link>
    {next && (
      <Link href={next.path} trailingIcon={IconName.ArrowRight}>
        {next.label}
      </Link>
    )}
  </nav>
);

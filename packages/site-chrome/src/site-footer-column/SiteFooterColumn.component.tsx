import type { FunctionComponent } from 'react';
import { useId } from 'react';

import { HeadingSize } from '../enums/HeadingSize';
import { Heading } from '../heading/Heading.component';
import type { ISiteFooterColumnProps } from './interfaces/ISiteFooterColumnProps';

/** A footer navigation landmark named by its own visible heading. */
export const SiteFooterColumn: FunctionComponent<ISiteFooterColumnProps> = ({
  heading,
  children,
}) => {
  const headingId = useId();

  return (
    <nav className="nx-site-footer-column" aria-labelledby={headingId}>
      <Heading level={2} size={HeadingSize.H3} id={headingId}>
        {heading}
      </Heading>
      {children}
    </nav>
  );
};

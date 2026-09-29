import type { FunctionComponent } from 'react';

import { HeadingSize } from '../enums/HeadingSize';
import { Heading } from '../heading/Heading.component';
import type { ISectionHeadingProps } from './interfaces/ISectionHeadingProps';

export const SectionHeading: FunctionComponent<ISectionHeadingProps> = ({
  title,
  level = 2,
  id,
  number,
  intro,
}) => (
  <div className="nx-section-heading">
    <div className="nx-section-heading__title">
      {number && (
        <span className="nx-section-heading__number" aria-hidden="true">
          {number}
        </span>
      )}
      <Heading level={level} size={HeadingSize.H2} id={id}>
        {title}
      </Heading>
    </div>
    {intro && <p className="nx-section-heading__intro">{intro}</p>}
  </div>
);

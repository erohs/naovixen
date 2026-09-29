import type { FunctionComponent } from 'react';

import { headingElementByLevel } from './constants/HeadingElementByLevel.const';
import { headingSizeByLevel } from './constants/HeadingSizeByLevel.const';
import type { IHeadingProps } from './interfaces/IHeadingProps';

export const Heading: FunctionComponent<IHeadingProps> = ({
  level,
  size = headingSizeByLevel[level],
  id,
  children,
}) => {
  const Element = headingElementByLevel[level];

  return (
    <Element id={id} className={`nx-heading nx-heading--${size}`}>
      {children}
    </Element>
  );
};

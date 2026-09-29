import type { FunctionComponent } from 'react';

import { iconDrawings } from './constants/IconDrawings.const';
import type { IIconProps } from './interfaces/IIconProps';

/** Always decorative: the text beside an icon carries its meaning. */
export const Icon: FunctionComponent<IIconProps> = ({ name }) => {
  const drawing = iconDrawings[name];

  return (
    <svg
      className="nx-icon"
      data-filled={drawing.isFilled}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {drawing.paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
};

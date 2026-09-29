import type { FunctionComponent } from 'react';

import { handDrawnRulePath } from './constants/HandDrawnRulePath.const';

/** A decorative divider. Stretches to the full width without thickening the line. */
export const HandDrawnRule: FunctionComponent = () => (
  <svg
    className="nx-hand-drawn-rule"
    viewBox="0 0 240 12"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d={handDrawnRulePath} vectorEffect="non-scaling-stroke" />
  </svg>
);

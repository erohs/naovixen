import type { FunctionComponent } from 'react';

import { foxOutlinePath } from './constants/FoxOutlinePath.const';

/**
 * The top of a fox's head, tilted as if curious. The drawing stops at its bottom edge, so
 * placed on a border it looks like the fox is peeking over it.
 */
export const FoxMascot: FunctionComponent = () => (
  <svg
    className="nx-fox-mascot"
    viewBox="0 0 96 60"
    width="96"
    height="60"
    aria-hidden="true"
    focusable="false"
  >
    <g transform="rotate(-4 48 60)">
      <path className="nx-fox-mascot__face" d={foxOutlinePath} />
      <path
        className="nx-fox-mascot__fur"
        d="M15.3 47.5C14 35.5 15.5 19 19 3.5Q28 9 36.5 19.5C43 16.5 52 15.8 59.5 19.8Q67.5 9.5 78.5 4C81.5 17 81 33 80.5 47.5Q69.5 40 59.3 46.2Q52.8 50.5 51.5 64H44.8Q43.8 50.5 37.2 46.3Q27.5 40.2 15.3 47.5Z"
      />
      <path d={foxOutlinePath} />
      <path d="M15.3 47.5Q27.5 40.2 37.2 46.3Q43.8 50.5 44.8 64M80.5 47.5Q69.5 40 59.3 46.2Q52.8 50.5 51.5 64M22.3 12.5Q23.5 21 28.5 26.5M75.3 12Q73.5 21.5 68.5 26.8" />
      <path
        className="nx-fox-mascot__eyes"
        d="M35.26 41.11A2.4 3.1-20 0 1 33.14 35.29 2.4 3.1-20 0 1 35.26 41.11ZM60.75 41.38A2.4 3.1 16 0 1 62.45 35.42 2.4 3.1 16 0 1 60.75 41.38Z"
      />
    </g>
  </svg>
);

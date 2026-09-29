import type { FunctionComponent } from 'react';

/** A glossy sticker, 1em square. Filled with the text colour, so a parent can recolour it. */
export const Heart: FunctionComponent = () => (
  <svg className="nx-heart" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 20.6C8.2 17.8 2.9 13.9 3.1 8.8 3.2 5.6 5.4 3.7 7.9 3.8c2 .1 3.4 1.4 4.2 3.3.9-1.8 2.5-3 4.6-2.9 2.7.2 4.5 2.5 4.2 5.4-.4 4.4-4.8 8.1-8.9 11Z" />
    <ellipse
      className="nx-heart__shine"
      cx="7.3"
      cy="8.1"
      rx="1.6"
      ry="1"
      transform="rotate(-35 7.3 8.1)"
    />
  </svg>
);

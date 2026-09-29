import type { FunctionComponent } from 'react';

import type { IImageProps } from './interfaces/IImageProps';

/** Loads when it nears the viewport, with its size reserved so nothing shifts meanwhile. */
export const Image: FunctionComponent<IImageProps> = ({ image, className }) => (
  <img
    className={className}
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    loading="lazy"
    decoding="async"
  />
);

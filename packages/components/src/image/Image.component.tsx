import type { FunctionComponent } from 'react';

import type { IImageProps } from './interfaces/IImageProps';

/** Lazy by default; pass `loading="eager"` for the image that is the page's largest paint. */
export const Image: FunctionComponent<IImageProps> = ({
    src,
    alt,
    width,
    height,
    loading = 'lazy',
    decoding = 'async',
    ...imageProps
}) => (
    <img
        {...imageProps}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
    />
);

import type { ImageUrlBuilder } from '@sanity/image-url';

import type { IImage } from '../interfaces/IImage';
import type { ISanityImage } from '../interfaces/ISanityImage';

/** Wider than any column on the site, so the CDN never serves more pixels than a page shows. */
const maximumWidth = 1600;

/** `undefined` for an image whose upload never finished, which has no size to reserve. */
export function toImage(image: ISanityImage, imageUrls: ImageUrlBuilder): IImage | undefined {
    const dimensions = image.asset?.metadata?.dimensions;

    if (image.asset === null || dimensions === undefined || dimensions === null) {
        return undefined;
    }

    return {
        src: imageUrls.image(image.asset.url).auto('format').fit('max').width(maximumWidth).url(),
        alt: image.alt,
        width: dimensions.width,
        height: dimensions.height,
    };
}

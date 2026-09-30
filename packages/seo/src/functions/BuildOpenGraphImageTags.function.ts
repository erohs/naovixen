import type { IOpenGraphImage } from '../interfaces/IOpenGraphImage';

import type { IPropertyMetaTag } from '../interfaces/IPropertyMetaTag';
import { resolveAbsoluteUrl } from './ResolveAbsoluteUrl.function';

export function buildOpenGraphImageTags(
    image: IOpenGraphImage,
    origin: string,
): IPropertyMetaTag[] {
    return [
        { property: 'og:image', content: resolveAbsoluteUrl(origin, image.src) },
        { property: 'og:image:alt', content: image.alt },
        { property: 'og:image:width', content: String(image.width) },
        { property: 'og:image:height', content: String(image.height) },
    ];
}

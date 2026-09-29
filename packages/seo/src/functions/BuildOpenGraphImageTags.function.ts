import type { IImage } from '@naovixen/models';

import type { IPropertyMetaTag } from '../interfaces/IPropertyMetaTag';
import { resolveAbsoluteUrl } from './ResolveAbsoluteUrl.function';

export function buildOpenGraphImageTags(image: IImage, origin: string): IPropertyMetaTag[] {
    return [
        { property: 'og:image', content: resolveAbsoluteUrl(origin, image.src) },
        { property: 'og:image:alt', content: image.alt },
        { property: 'og:image:width', content: String(image.width) },
        { property: 'og:image:height', content: String(image.height) },
    ];
}

import { setResponseHeader } from '@tanstack/react-start/server';
import type { IBlogRepository } from '@naovixen/cms';

import { privateCacheControl } from '../constants/PrivateCacheControl.const';
import { createSanityBlogRepository } from './CreateSanityBlogRepository.function';
import { isPreviewRequest } from './IsPreviewRequest.function';

/** Server only. A preview response is marked private, so no cache ever shows a draft. */
export async function createRequestBlogRepository(): Promise<IBlogRepository> {
    const isPreview = await isPreviewRequest();

    if (isPreview) {
        setResponseHeader('Cache-Control', privateCacheControl);
    }

    return createSanityBlogRepository(isPreview);
}

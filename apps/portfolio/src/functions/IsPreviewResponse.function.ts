import { setResponseHeader } from '@tanstack/react-start/server';

import { privateCacheControl } from '../constants/PrivateCacheControl.const';
import { isPreviewRequest } from './IsPreviewRequest.function';

/**
 * Server only. Decides whether this response shows drafts, and if so marks it private, so no
 * cache ever keeps a draft for anyone else.
 */
export async function isPreviewResponse(): Promise<boolean> {
    const isPreview = await isPreviewRequest();

    if (isPreview) {
        setResponseHeader('Cache-Control', privateCacheControl);
    }

    return isPreview;
}

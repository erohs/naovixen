import { createImageUrlBuilder } from '@sanity/image-url';
import { SanityProjectRepository } from '@naovixen/cms';
import type { IProjectRepository } from '@naovixen/cms';

import { createSanityClient } from './CreateSanityClient.function';

/** Server only: a preview repository reads drafts with the secret token. */
export function createSanityProjectRepository(isPreview: boolean): IProjectRepository {
    const client = createSanityClient(isPreview);

    return new SanityProjectRepository(client, createImageUrlBuilder(client));
}

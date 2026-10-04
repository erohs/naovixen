import { createImageUrlBuilder } from "@sanity/image-url";
import { SanityBlogRepository } from "@naovixen/cms";
import type { IBlogRepository } from "@naovixen/cms";
import { createSanityClient } from "./CreateSanityClient.function";

/** Server only: a preview repository reads drafts with the secret token. */
export const createSanityBlogRepository = (isPreview: boolean): IBlogRepository => {
    const client = createSanityClient(isPreview);

    return new SanityBlogRepository(client, createImageUrlBuilder(client));
};

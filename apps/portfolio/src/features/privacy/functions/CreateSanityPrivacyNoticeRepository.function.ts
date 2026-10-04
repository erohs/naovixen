import { createImageUrlBuilder } from "@sanity/image-url";
import { SanityPrivacyNoticeRepository } from "@naovixen/cms";
import type { IPrivacyNoticeRepository } from "@naovixen/cms";
import { createSanityClient } from "../../sanity/functions/CreateSanityClient.function";

/** Server only: a preview repository reads drafts with the secret token. */
export const createSanityPrivacyNoticeRepository = (isPreview: boolean): IPrivacyNoticeRepository => {
    const client = createSanityClient(isPreview);

    return new SanityPrivacyNoticeRepository(client, createImageUrlBuilder(client));
};

import type { ImageUrlBuilder } from "@sanity/image-url";
import type { PrivacyNoticeQueryResult } from "../generated/SanityTypes";
import type { IGroqClient } from "../interfaces/IGroqClient";
import type { IPrivacyNotice } from "../interfaces/IPrivacyNotice";
import type { IPrivacyNoticeRepository } from "../interfaces/IPrivacyNoticeRepository";
import { toBody } from "../functions/ToBody.function";
import { privacyNoticeQuery } from "./constants/PrivacyNoticeQuery.const";

export class SanityPrivacyNoticeRepository implements IPrivacyNoticeRepository {
    private readonly _client: IGroqClient;
    private readonly _imageUrls: ImageUrlBuilder;

    public constructor(client: IGroqClient, imageUrls: ImageUrlBuilder) {
        this._client = client;
        this._imageUrls = imageUrls;
    }

    public async getPrivacyNotice(): Promise<IPrivacyNotice | undefined> {
        const notice = await this._client.fetch<PrivacyNoticeQueryResult>(privacyNoticeQuery, {});

        if (notice === null) {
            return undefined;
        }

        return { ...notice, body: toBody(notice.body, this._imageUrls) };
    }
}

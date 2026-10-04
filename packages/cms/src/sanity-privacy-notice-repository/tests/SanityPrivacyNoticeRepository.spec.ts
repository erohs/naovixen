import { describe, expect, test } from "vitest";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { IGroqClient } from "../../interfaces/IGroqClient";
import { SanityPrivacyNoticeRepository } from "../SanityPrivacyNoticeRepository";

const imageUrls = createImageUrlBuilder({ projectId: "fixture", dataset: "test" });

const createRepositoryAnswering = (result: unknown): SanityPrivacyNoticeRepository => {
    const client: IGroqClient = {
        fetch: <Result>() => Promise.resolve(result as Result),
    };

    return new SanityPrivacyNoticeRepository(client, imageUrls);
};

describe("Using SanityPrivacyNoticeRepository, given no notice is published, when it is asked for", () => {
    test("then it should resolve to undefined", async () => {
        expect(await createRepositoryAnswering(null).getPrivacyNotice()).toBeUndefined();
    });
});

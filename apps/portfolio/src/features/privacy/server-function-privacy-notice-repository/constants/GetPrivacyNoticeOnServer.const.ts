import { createServerFn } from "@tanstack/react-start";
import { createSanityPrivacyNoticeRepository } from "../../functions/CreateSanityPrivacyNoticeRepository.function";
import { isPreviewResponse } from "../../../preview/functions/IsPreviewResponse.function";

export const getPrivacyNoticeOnServer = createServerFn().handler(async () =>
    createSanityPrivacyNoticeRepository(await isPreviewResponse()).getPrivacyNotice(),
);

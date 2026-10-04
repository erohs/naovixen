import type { IPrivacyNoticeRepository } from "@naovixen/cms";
import { ServerFunctionPrivacyNoticeRepository } from "../server-function-privacy-notice-repository/ServerFunctionPrivacyNoticeRepository";

export const privacyNoticeRepository: IPrivacyNoticeRepository = new ServerFunctionPrivacyNoticeRepository();

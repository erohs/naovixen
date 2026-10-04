import type { IPrivacyNotice, IPrivacyNoticeRepository } from "@naovixen/cms";
import { getPrivacyNoticeOnServer } from "./constants/GetPrivacyNoticeOnServer.const";

/** Reads through a server function, so the CMS is only ever called from the server. */
export class ServerFunctionPrivacyNoticeRepository implements IPrivacyNoticeRepository {
    public getPrivacyNotice(): Promise<IPrivacyNotice | undefined> {
        return getPrivacyNoticeOnServer();
    }
}

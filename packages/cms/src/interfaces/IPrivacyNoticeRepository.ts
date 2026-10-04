import type { IPrivacyNotice } from "./IPrivacyNotice";

export interface IPrivacyNoticeRepository {
    /** Resolves to `undefined` until a notice is published, so a route can 404. */
    getPrivacyNotice(): Promise<IPrivacyNotice | undefined>;
}

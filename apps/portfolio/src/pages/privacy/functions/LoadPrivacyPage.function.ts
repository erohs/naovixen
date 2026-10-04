import { notFound } from "@tanstack/react-router";
import type { IPrivacyNotice, IPrivacyNoticeRepository } from "@naovixen/cms";

/** Until a notice is published in the Studio, the page is a 404. */
export const loadPrivacyPage = async (privacyNoticeRepository: IPrivacyNoticeRepository): Promise<IPrivacyNotice> => {
    const notice = await privacyNoticeRepository.getPrivacyNotice();

    if (notice === undefined) {
        /* eslint-disable-next-line @typescript-eslint/only-throw-error -- the router's own signal */
        throw notFound();
    }

    return notice;
};

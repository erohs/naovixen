import type { ISeedDocument } from "../interfaces/ISeedDocument";
import type { ISeedPrivacyNotice } from "../interfaces/ISeedPrivacyNotice";
import { toBody } from "./ToBody.function";

/** The singleton's id is its type name, which is the document the Studio opens. */
export const toPrivacyNoticeDocument = ({ body, ...fields }: ISeedPrivacyNotice): ISeedDocument => ({
    _id: "privacyNotice",
    _type: "privacyNotice",
    ...fields,
    body: toBody(body),
});

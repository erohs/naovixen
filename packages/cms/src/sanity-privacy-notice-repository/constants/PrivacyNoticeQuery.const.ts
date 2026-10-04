import { defineQuery } from "groq";
import { bodyProjection } from "../../constants/BodyProjection.const";

export const privacyNoticeQuery = defineQuery(`
    *[_type == "privacyNotice"][0] {
        title,
        intro,
        lastUpdated,
        ${bodyProjection}
    }
`);

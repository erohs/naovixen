import type { ISeedContent } from "../interfaces/ISeedContent";
import type { ISeedDocument } from "../interfaces/ISeedDocument";
import { toPostDocument } from "./ToPostDocument.function";
import { toPrivacyNoticeDocument } from "./ToPrivacyNoticeDocument.function";
import { toProjectDocument } from "./ToProjectDocument.function";
import { toTagDocuments } from "./ToTagDocuments.function";

/** Tags first, so the posts that reference them never point at nothing. */
export const buildSeedDocuments = (content: ISeedContent): readonly ISeedDocument[] => [
    ...toTagDocuments(content.posts),
    ...content.posts.map(toPostDocument),
    ...content.projects.map(toProjectDocument),
    toPrivacyNoticeDocument(content.privacyNotice),
];

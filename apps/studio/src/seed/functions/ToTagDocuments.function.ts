import type { ISeedDocument } from "../interfaces/ISeedDocument";
import type { ISeedPost } from "../interfaces/ISeedPost";
import { toTagId } from "./ToTagId.function";

/** One tag for each title used on any post. */
export const toTagDocuments = (posts: readonly ISeedPost[]): readonly ISeedDocument[] =>
    [...new Set(posts.flatMap((post) => post.tags))].map((title) => ({ _id: toTagId(title), _type: "tag", title }));

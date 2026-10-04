import type { ISeedDocument } from "../interfaces/ISeedDocument";
import type { ISeedPost } from "../interfaces/ISeedPost";
import { toBody } from "./ToBody.function";
import { toTagId } from "./ToTagId.function";

export const toPostDocument = ({ slug, tags, body, ...fields }: ISeedPost): ISeedDocument => ({
    _id: `post-${slug}`,
    _type: "post",
    ...fields,
    slug: { _type: "slug", current: slug },
    tags: tags.map((title) => ({ _type: "reference", _key: toTagId(title), _ref: toTagId(title) })),
    body: toBody(body),
});

import type { ISeedDocument } from "../interfaces/ISeedDocument";
import type { ISeedProject } from "../interfaces/ISeedProject";
import { toBody } from "./ToBody.function";

export const toProjectDocument = ({ slug, body, ...fields }: ISeedProject): ISeedDocument => ({
    _id: `project-${slug}`,
    _type: "project",
    ...fields,
    slug: { _type: "slug", current: slug },
    body: toBody(body),
});

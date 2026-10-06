import type { ShikiConfig } from "astro";

type ShikiTransformer = NonNullable<ShikiConfig["transformers"]>[number];

/** Carries a fence's `title="file.ts"` onto the pre element, where the code figure reads it. */
export const codeTitle: ShikiTransformer = {
    name: "code-title",
    pre(node) {
        const title = /title="([^"]+)"/.exec(this.options.meta?.__raw ?? "")?.[1];
        if (title !== undefined) {
            node.properties["dataTitle"] = title;
        }
    },
};

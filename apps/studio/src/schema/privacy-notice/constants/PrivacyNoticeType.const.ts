import { defineField, defineType } from "sanity";
import { LockIcon } from "@sanity/icons/Lock";
import { bodyField } from "../../body/constants/BodyField.const";

/** There is one notice, opened from its own item in the Studio's list rather than created. */
export const privacyNoticeType = defineType({
    name: "privacyNotice",
    title: "Privacy notice",
    type: "document",
    icon: LockIcon,
    fields: [
        defineField({
            name: "title",
            description: "The page's main heading.",
            type: "string",
            validation: (rule) => rule.required().max(100),
        }),
        defineField({
            name: "intro",
            description: "One or two sentences under the heading, also shown to search engines.",
            type: "text",
            rows: 3,
            validation: (rule) => rule.required().max(300),
        }),
        defineField({
            name: "lastUpdated",
            title: "Last updated",
            description: "Change this whenever you change what the notice says.",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        bodyField,
    ],
    preview: { select: { title: "title", subtitle: "lastUpdated" } },
});

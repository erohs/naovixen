import { defineField, defineType } from "sanity";
import { OlistIcon } from "@sanity/icons/Olist";

/** Renders as the site's SectionHeading. */
export const sectionHeadingType = defineType({
    name: "sectionHeading",
    title: "Section heading",
    type: "object",
    icon: OlistIcon,
    fields: [
        defineField({
            name: "text",
            description: "A level 2 heading.",
            type: "string",
            validation: (rule) => rule.required().max(60),
        }),
        defineField({
            name: "isNumbered",
            title: "Numbered",
            description: "Shows its place among the post's numbered headings in a chip before it.",
            type: "boolean",
            initialValue: true,
        }),
    ],
    preview: { select: { title: "text" } },
});

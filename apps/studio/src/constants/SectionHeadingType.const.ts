import { defineField, defineType } from 'sanity';
import { OlistIcon } from '@sanity/icons/Olist';

/** Renders as the site's SectionHeading, numbered from its order among the others. */
export const sectionHeadingType = defineType({
    name: 'sectionHeading',
    title: 'Section heading',
    type: 'object',
    icon: OlistIcon,
    fields: [
        defineField({
            name: 'text',
            description: 'A level 2 heading with a number chip before it.',
            type: 'string',
            validation: (rule) => rule.required().max(60),
        }),
    ],
    preview: { select: { title: 'text' } },
});

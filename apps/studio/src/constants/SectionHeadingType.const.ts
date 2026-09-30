import { defineField, defineType } from 'sanity';
import { OlistIcon } from '@sanity/icons/Olist';

/** A level 2 heading with a number chip. Numbers come from its order among the others. */
export const sectionHeadingType = defineType({
    name: 'sectionHeading',
    title: 'Numbered heading',
    type: 'object',
    icon: OlistIcon,
    fields: [
        defineField({
            name: 'text',
            type: 'string',
            validation: (rule) => rule.required().max(60),
        }),
    ],
    preview: { select: { title: 'text' } },
});

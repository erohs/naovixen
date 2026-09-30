import { defineField, defineType } from 'sanity';
import { BulbOutlineIcon } from '@sanity/icons/BulbOutline';

export const calloutType = defineType({
    name: 'callout',
    title: 'Callout',
    type: 'object',
    icon: BulbOutlineIcon,
    fields: [
        defineField({
            name: 'kind',
            title: 'Label',
            description: 'A short handwritten label, such as "tip!".',
            type: 'string',
            validation: (rule) => rule.required().max(20),
        }),
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required().max(80),
        }),
        defineField({
            name: 'text',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required(),
        }),
    ],
    preview: { select: { title: 'title', subtitle: 'kind' } },
});

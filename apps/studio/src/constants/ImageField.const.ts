import { defineField } from 'sanity';

/** An image that cannot be saved without a description for people who cannot see it. */
export const imageField = defineField({
    name: 'image',
    type: 'image',
    options: { hotspot: true },
    fields: [
        defineField({
            name: 'alt',
            title: 'Alternative text',
            description: 'What the image shows, for people who cannot see it.',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
});

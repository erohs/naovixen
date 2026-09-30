import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons/Image';

import { imageField } from './ImageField.const';

/** Renders as the site's Figure: the fields are its props. */
export const figureType = defineType({
    name: 'figure',
    title: 'Figure',
    type: 'object',
    icon: ImageIcon,
    fields: [
        defineField({ ...imageField, validation: (rule) => rule.required() }),
        defineField({ name: 'caption', type: 'string' }),
        defineField({
            name: 'shape',
            description: 'Wide for screenshots, portrait for photos.',
            type: 'string',
            options: {
                list: [
                    { title: 'Wide', value: 'wide' },
                    { title: 'Portrait', value: 'portrait' },
                ],
                layout: 'radio',
            },
            initialValue: 'wide',
            validation: (rule) => rule.required(),
        }),
    ],
    preview: { select: { title: 'caption', subtitle: 'image.alt', media: 'image' } },
});

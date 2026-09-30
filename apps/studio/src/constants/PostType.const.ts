import { defineArrayMember, defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons/DocumentText';

import { bodyField } from './BodyField.const';

export const postType = defineType({
    name: 'post',
    title: 'Blog post',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required().max(100),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'excerpt',
            description: 'One or two sentences, shown on the blog page and to search engines.',
            type: 'text',
            rows: 2,
            validation: (rule) => rule.required().max(200),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published on',
            type: 'date',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [defineArrayMember({ type: 'reference', to: [{ type: 'tag' }] })],
            validation: (rule) => rule.unique(),
        }),
        bodyField,
    ],
    orderings: [
        {
            title: 'Newest first',
            name: 'publishedAtDescending',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
    preview: { select: { title: 'title', subtitle: 'publishedAt' } },
});

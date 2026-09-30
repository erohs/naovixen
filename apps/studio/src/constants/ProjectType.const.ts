import { defineArrayMember, defineField, defineType } from 'sanity';
import { CaseIcon } from '@sanity/icons/Case';

import { bodyField } from './BodyField.const';
import { imageField } from './ImageField.const';

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: CaseIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required().max(80),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'position',
            description: 'Projects are listed from 1 upwards.',
            type: 'number',
            validation: (rule) => rule.required().integer().positive(),
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured',
            description: 'Shown on the home page.',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'summary',
            description: 'One sentence for the project card and search engines.',
            type: 'text',
            rows: 2,
            validation: (rule) => rule.required().max(200),
        }),
        defineField({
            name: 'stack',
            title: 'Tech stack',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            options: { layout: 'tags' },
            validation: (rule) => rule.required().min(1),
        }),
        defineField({ ...imageField, name: 'screenshot' }),
        bodyField,
    ],
    orderings: [
        { title: 'Position', name: 'position', by: [{ field: 'position', direction: 'asc' }] },
    ],
    preview: { select: { title: 'title', subtitle: 'summary', media: 'screenshot' } },
});

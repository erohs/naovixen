import { defineArrayMember, defineField } from 'sanity';

/**
 * Only what the site renders. The page owns the h1, so a body starts at h2. Code blocks come
 * from the code input plugin.
 */
export const bodyField = defineField({
    name: 'body',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading', value: 'h2' },
                { title: 'Subheading', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' },
                ],
                annotations: [
                    defineArrayMember({
                        name: 'link',
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'href',
                                title: 'URL',
                                type: 'url',
                                validation: (rule) =>
                                    rule.required().uri({
                                        allowRelative: true,
                                        scheme: ['http', 'https', 'mailto'],
                                    }),
                            }),
                        ],
                    }),
                ],
            },
        }),
        defineArrayMember({ type: 'callout' }),
        defineArrayMember({
            type: 'code',
            options: { withFilename: true },
            validation: (rule) =>
                rule.custom((value: { code?: string } | undefined) =>
                    value?.code === undefined || value.code.trim() === '' ? 'Add the code.' : true,
                ),
        }),
        defineArrayMember({ type: 'figure' }),
    ],
    validation: (rule) => rule.required(),
});

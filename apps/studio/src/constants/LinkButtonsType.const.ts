import { defineArrayMember, defineField, defineType } from 'sanity';
import { LaunchIcon } from '@sanity/icons/Launch';

/**
 * Renders as a row of the site's LinkButtons: buttons to other sites, such as a live demo.
 * Each opens in a new tab and says so.
 */
export const linkButtonsType = defineType({
    name: 'linkButtons',
    title: 'Link buttons',
    type: 'object',
    icon: LaunchIcon,
    fields: [
        defineField({
            name: 'buttons',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'linkButton',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            description: 'Says where it goes, such as "Live demo".',
                            type: 'string',
                            validation: (rule) => rule.required().max(30),
                        }),
                        defineField({
                            name: 'href',
                            title: 'URL',
                            type: 'url',
                            validation: (rule) => rule.required().uri({ scheme: ['https'] }),
                        }),
                        defineField({
                            name: 'variant',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Primary', value: 'primary' },
                                    { title: 'Secondary', value: 'secondary' },
                                ],
                                layout: 'radio',
                            },
                            initialValue: 'secondary',
                            validation: (rule) => rule.required(),
                        }),
                    ],
                    preview: { select: { title: 'label', subtitle: 'href' } },
                }),
            ],
            validation: (rule) => rule.required().min(1),
        }),
    ],
    preview: { select: { title: 'buttons.0.label', subtitle: 'buttons.0.href' } },
});

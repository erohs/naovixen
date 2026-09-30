import { defineArrayMember, defineField, defineType } from 'sanity';
import { ThListIcon } from '@sanity/icons/ThList';

/** Short labelled facts, such as a role and a timeline. */
export const factListType = defineType({
    name: 'factList',
    title: 'Facts',
    type: 'object',
    icon: ThListIcon,
    fields: [
        defineField({
            name: 'facts',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'fact',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            type: 'string',
                            validation: (rule) => rule.required().max(30),
                        }),
                        defineField({
                            name: 'value',
                            type: 'string',
                            validation: (rule) => rule.required().max(120),
                        }),
                    ],
                    preview: { select: { title: 'value', subtitle: 'label' } },
                }),
            ],
            validation: (rule) => rule.required().min(1),
        }),
    ],
    preview: { select: { title: 'facts.0.value', subtitle: 'facts.0.label' } },
});

import { defineField, defineType } from 'sanity';

import { bodyField } from './BodyField.const';

/** One numbered part of a case study, such as "The problem". Numbers come from the order. */
export const projectSectionType = defineType({
    name: 'projectSection',
    title: 'Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            validation: (rule) => rule.required().max(60),
        }),
        bodyField,
    ],
    preview: { select: { title: 'heading' } },
});

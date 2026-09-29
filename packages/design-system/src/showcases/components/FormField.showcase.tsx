import { FormField, Input, TextArea } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const formFieldShowcase: IShowcase = {
    name: 'FormField',
    examples: [
        {
            name: 'Input',
            render: () => (
                <FormField label="Email">
                    {(control) => <Input type="email" {...control} />}
                </FormField>
            ),
        },
        {
            name: 'With a hint',
            render: () => (
                <FormField label="Message" hint="A few lines is plenty.">
                    {(control) => <TextArea rows={4} {...control} />}
                </FormField>
            ),
        },
        {
            name: 'With an error',
            render: () => (
                <FormField label="Email" error="Enter an email address, like name@example.com.">
                    {(control) => <Input type="email" defaultValue="name@" {...control} />}
                </FormField>
            ),
        },
    ],
};

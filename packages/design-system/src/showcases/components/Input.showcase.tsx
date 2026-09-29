import { Input, Label, TextArea } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const inputShowcase: IShowcase = {
    name: 'Input, TextArea and Label',
    examples: [
        {
            name: 'Input',
            render: () => (
                <>
                    <Label htmlFor="showcase-name">Name</Label>
                    <Input id="showcase-name" />
                </>
            ),
        },
        {
            name: 'Invalid input',
            render: () => (
                <>
                    <Label htmlFor="showcase-invalid">Email</Label>
                    <Input id="showcase-invalid" aria-invalid defaultValue="name@" />
                </>
            ),
        },
        {
            name: 'TextArea',
            render: () => (
                <>
                    <Label htmlFor="showcase-message">Message</Label>
                    <TextArea id="showcase-message" rows={4} />
                </>
            ),
        },
    ],
};

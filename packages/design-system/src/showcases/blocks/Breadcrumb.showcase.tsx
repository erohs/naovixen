import { Breadcrumb } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

export const breadcrumbShowcase: IShowcase = {
    name: 'Breadcrumb',
    examples: [
        {
            name: 'Two levels deep',
            render: () => (
                <Breadcrumb
                    trail={[
                        { label: 'Home', href: '#example' },
                        { label: 'Work', href: '#example' },
                    ]}
                    currentLabel="Example project"
                />
            ),
        },
    ],
};

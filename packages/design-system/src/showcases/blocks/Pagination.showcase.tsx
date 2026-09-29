import { Pagination } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

export const paginationShowcase: IShowcase = {
    name: 'Pagination',
    examples: [
        {
            name: 'Back and next',
            render: () => (
                <Pagination
                    aria-label="Where next"
                    back={{ label: 'All projects', href: '#example' }}
                    next={{ label: 'Next: Example project', href: '#example' }}
                />
            ),
        },
        {
            name: 'Back only',
            render: () => <Pagination back={{ label: 'All posts', href: '#example' }} />,
        },
    ],
};

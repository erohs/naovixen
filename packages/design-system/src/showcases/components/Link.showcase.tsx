import { Link } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const linkShowcase: IShowcase = {
    name: 'Link',
    examples: [
        { name: 'At rest', render: () => <Link href="#example">Example page</Link> },
        {
            name: 'Current page',
            render: () => (
                <Link href="#example" aria-current="page">
                    Example page
                </Link>
            ),
        },
        {
            name: 'Inside a sentence',
            render: () => (
                <p>
                    A link that wraps across lines keeps its underline:{' '}
                    <Link href="#example">a longer example link that runs on</Link>.
                </p>
            ),
        },
    ],
};

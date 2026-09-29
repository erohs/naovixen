import { Link, VisuallyHidden } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const visuallyHiddenShowcase: IShowcase = {
    name: 'VisuallyHidden',
    examples: [
        {
            name: 'Extra context for a link',
            render: () => (
                <Link href="#example">
                    Read case study<VisuallyHidden>: Example project</VisuallyHidden>
                </Link>
            ),
        },
    ],
};

import { TagList } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

export const tagListShowcase: IShowcase = {
    name: 'TagList',
    examples: [
        {
            name: 'Labelled list',
            render: () => <TagList label="Tech stack" tags={['TypeScript', 'React', 'CSS']} />,
        },
    ],
};

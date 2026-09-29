import { Tag } from '@naovixen/components';
import { Cluster, Space } from '@naovixen/layout';

import type { IShowcase } from '../../interfaces/IShowcase';

const tags = ['TypeScript', 'React', 'Accessibility', 'CSS', 'Testing', 'Design systems'];

export const clusterShowcase: IShowcase = {
    name: 'Cluster',
    examples: [Space.BetweenText, Space.BetweenContent].map((gap) => ({
        name: `Gap: ${gap}`,
        render: () => (
            <Cluster gap={gap}>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Cluster>
        ),
    })),
};

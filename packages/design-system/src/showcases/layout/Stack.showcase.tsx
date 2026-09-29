import { Tag } from '@naovixen/components';
import { Space, Stack } from '@naovixen/layout';

import type { IShowcase } from '../../interfaces/IShowcase';

export const stackShowcase: IShowcase = {
    name: 'Stack',
    examples: Object.values(Space).map((gap) => ({
        name: `Gap: ${gap}`,
        render: () => (
            <Stack gap={gap}>
                <Tag>First</Tag>
                <Tag>Second</Tag>
                <Tag>Third</Tag>
            </Stack>
        ),
    })),
};

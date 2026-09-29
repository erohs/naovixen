import { Text } from '@naovixen/components';
import { Container } from '@naovixen/layout';

import type { IShowcase } from '../../interfaces/IShowcase';

export const containerShowcase: IShowcase = {
    name: 'Container',
    examples: [
        {
            name: 'Page width with the page gutter',
            render: () => (
                <Container>
                    <Text>Content is centred and never wider than the page width.</Text>
                </Container>
            ),
        },
    ],
};

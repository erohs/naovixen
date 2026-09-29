import { Callout } from '@naovixen/blocks';
import { Text } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const calloutShowcase: IShowcase = {
    name: 'Callout',
    examples: [
        {
            name: 'Tip',
            render: () => (
                <Callout kind="tip!" heading="Check both themes">
                    <Text>A colour that passes on the light page can fail on the dark one.</Text>
                </Callout>
            ),
        },
    ],
};

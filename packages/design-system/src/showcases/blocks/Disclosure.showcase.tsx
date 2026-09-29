import { Disclosure } from '@naovixen/blocks';
import { Text } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

const ignoreChange = (): void => undefined;

export const disclosureShowcase: IShowcase = {
    name: 'Disclosure',
    examples: [
        {
            name: 'Closed',
            render: () => (
                <Disclosure label="More details" isOpen={false} onOpenChange={ignoreChange}>
                    <Text>Hidden until the button is pressed.</Text>
                </Disclosure>
            ),
        },
        {
            name: 'Open',
            render: () => (
                <Disclosure label="More details" isOpen onOpenChange={ignoreChange}>
                    <Text>Shown below the button while open.</Text>
                </Disclosure>
            ),
        },
    ],
};

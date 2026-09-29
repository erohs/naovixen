import { Text, TextVariant } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const textShowcase: IShowcase = {
    name: 'Text',
    examples: Object.values(TextVariant).map((variant) => ({
        name: variant,
        render: () => <Text variant={variant}>The quick brown fox jumps over the lazy dog.</Text>,
    })),
};

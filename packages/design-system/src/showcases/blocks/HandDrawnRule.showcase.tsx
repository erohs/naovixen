import { HandDrawnRule } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

export const handDrawnRuleShowcase: IShowcase = {
    name: 'HandDrawnRule',
    examples: [{ name: 'Full width', render: () => <HandDrawnRule /> }],
};

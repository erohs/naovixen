import { Blockquote, Code } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

export const codeShowcase: IShowcase = {
    name: 'Code and Blockquote',
    examples: [
        {
            name: 'Code in a sentence',
            render: () => (
                <p>
                    Run <Code>pnpm test</Code> before pushing.
                </p>
            ),
        },
        {
            name: 'Blockquote',
            render: () => <Blockquote>A quoted line, set a size up.</Blockquote>,
        },
    ],
};

import { CodeBlock } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

const exampleCode = `export function add(first: number, second: number): number {
  return first + second;
}`;

export const codeBlockShowcase: IShowcase = {
    name: 'CodeBlock',
    examples: [
        {
            name: 'With a filename',
            render: () => <CodeBlock code={exampleCode} language="TypeScript" filename="add.ts" />,
        },
        {
            name: 'A long line wraps',
            render: () => (
                <CodeBlock
                    code="const message = 'A very long line of code that keeps going well past the width of the block, so it has to wrap';"
                    language="TypeScript"
                />
            ),
        },
    ],
};

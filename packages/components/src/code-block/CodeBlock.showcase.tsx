import type { IShowcase } from '../interfaces/IShowcase';
import { CodeBlock } from './CodeBlock.component';

const exampleCode = `export function greet(name: string): string {
  return \`Hello, \${name}\`;
}`;

export const codeBlockShowcase: IShowcase = {
  name: 'CodeBlock',
  examples: [
    {
      name: 'With a filename',
      render: () => <CodeBlock code={exampleCode} language="TypeScript" filename="greet.ts" />,
    },
    {
      name: 'Without a filename',
      render: () => <CodeBlock code={exampleCode} language="TypeScript" />,
    },
    {
      name: 'With a long line',
      render: () => (
        <CodeBlock
          code={`const exampleUrl = '${'https://example.com/'.repeat(8)}';`}
          language="TypeScript"
        />
      ),
    },
  ],
};

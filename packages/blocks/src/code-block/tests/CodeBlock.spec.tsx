import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '@naovixen/component-testing';
import { CodeBlock } from '../CodeBlock.component';

const code = 'const answer = 42;';

describe('Using CodeBlock', () => {
    describe('given code, a language and a filename', () => {
        describe('when it renders', () => {
            test('then it should show the code exactly as written', () => {
                render(<CodeBlock code={code} language="TypeScript" filename="answer.ts" />);

                expect(screen.getByRole('code').textContent).toBe(code);
            });

            test('then it should caption the code with the filename and the language', () => {
                render(<CodeBlock code={code} language="TypeScript" filename="answer.ts" />);

                expect(screen.getByRole('figure').textContent).toBe(`answer.tsTypeScript${code}`);
            });

            test('then it should have no accessibility violations', async () => {
                render(<CodeBlock code={code} language="TypeScript" filename="answer.ts" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given no filename', () => {
        describe('when it renders', () => {
            test('then it should caption the code with the language alone', () => {
                render(<CodeBlock code={code} language="TypeScript" />);

                expect(screen.getByRole('figure').textContent).toBe(`TypeScript${code}`);
            });
        });
    });
});

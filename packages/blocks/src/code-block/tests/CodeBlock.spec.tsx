import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '@naovixen/nvpack/testing';
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

                expect(screen.getByRole('figure').textContent).toBe(`answer.ts TypeScript${code}`);
            });

            test('then it should name the scrolling region by its caption', () => {
                render(<CodeBlock code={code} language="TypeScript" filename="answer.ts" />);

                expect(screen.getByRole('region', { name: 'answer.ts TypeScript' })).toBeDefined();
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

    describe('given a line too long to fit', () => {
        describe('when someone presses Tab', () => {
            test('then it should focus the code, so the arrow keys can scroll it', async () => {
                render(<CodeBlock code={code} language="TypeScript" />);

                await userEvent.setup().tab();

                expect(screen.getByRole('region', { name: 'TypeScript' }).matches(':focus')).toBe(
                    true,
                );
            });
        });
    });
});

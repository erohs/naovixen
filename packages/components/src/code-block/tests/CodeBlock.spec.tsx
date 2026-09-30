import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { CodeBlock } from '../CodeBlock.component';

const code = 'const answer = 42;';

describe('Using CodeBlock, given code, a language and a filename, when it renders', () => {
    test('then it should caption the code with the filename and the language', () => {
        render(<CodeBlock code={code} language="TypeScript" filename="answer.ts" />);

        expect(screen.getByRole('figure').textContent).toBe(`answer.ts TypeScript${code}`);
    });

    test('then it should name the scrolling region by its caption', () => {
        render(<CodeBlock code={code} language="TypeScript" filename="answer.ts" />);

        expect(screen.getByRole('region', { name: 'answer.ts TypeScript' })).toBeDefined();
    });
});

describe('Using CodeBlock, given no filename, when it renders', () => {
    test('then it should caption the code with the language alone', () => {
        render(<CodeBlock code={code} language="TypeScript" />);

        expect(screen.getByRole('figure').textContent).toBe(`TypeScript${code}`);
    });
});

describe('Using CodeBlock, given a line too long to fit, when someone presses Tab', () => {
    test('then it should focus the code, so the arrow keys can scroll it', async () => {
        render(<CodeBlock code={code} language="TypeScript" />);

        await userEvent.setup().tab();

        expect(screen.getByRole('region', { name: 'TypeScript' }).matches(':focus')).toBe(true);
    });
});

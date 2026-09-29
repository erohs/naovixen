import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Code } from '../Code.component';

describe('Using Code', () => {
    describe('when it renders inside a sentence', () => {
        test('then it should mark its text as code', () => {
            render(
                <p>
                    Run <Code>pnpm test</Code> first.
                </p>,
            );

            expect(screen.getByRole('code')).toHaveProperty('textContent', 'pnpm test');
        });

        test('then it should have no accessibility violations', async () => {
            render(
                <p>
                    Run <Code>pnpm test</Code> first.
                </p>,
            );

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

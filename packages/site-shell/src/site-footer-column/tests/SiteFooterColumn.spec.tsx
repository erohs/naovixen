import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SiteFooterColumn } from '../SiteFooterColumn.component';

describe('Using SiteFooterColumn', () => {
    describe('when it renders', () => {
        test('then it should be a navigation landmark named by its heading', () => {
            render(
                <SiteFooterColumn heading="elsewhere">
                    <a href="https://example.com">Example</a>
                </SiteFooterColumn>,
            );

            expect(screen.getByRole('navigation', { name: 'elsewhere' })).toBeDefined();
        });

        test('then it should head the column at level 2', () => {
            render(
                <SiteFooterColumn heading="elsewhere">
                    <a href="https://example.com">Example</a>
                </SiteFooterColumn>,
            );

            expect(screen.getByRole('heading', { level: 2, name: 'elsewhere' })).toBeDefined();
        });

        test('then it should have no accessibility violations', async () => {
            render(
                <SiteFooterColumn heading="elsewhere">
                    <a href="https://example.com">Example</a>
                </SiteFooterColumn>,
            );

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

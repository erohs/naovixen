import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Blockquote } from '../Blockquote.component';

describe('Using Blockquote', () => {
    describe('given a source', () => {
        describe('when it renders', () => {
            test('then it should pass the citation through', () => {
                render(<Blockquote cite="https://example.com">A quoted line.</Blockquote>);

                expect(screen.getByRole('blockquote')).toHaveProperty(
                    'cite',
                    'https://example.com/',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(<Blockquote>A quoted line.</Blockquote>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});

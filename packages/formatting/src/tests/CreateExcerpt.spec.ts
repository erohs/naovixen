import { describe, expect, test } from 'vitest';

import { createExcerpt } from '../functions/CreateExcerpt.function';

describe('Using createExcerpt', () => {
    describe('when the text is shorter than the limit', () => {
        test('then it should return the text unchanged', () => {
            expect(createExcerpt('Short enough', 50)).toBe('Short enough');
        });
    });

    describe('when the text is longer than the limit', () => {
        test('then it should cut at the last word boundary', () => {
            expect(createExcerpt('Building an accessible portfolio', 20)).toBe('Building an…');
        });
    });

    describe('when the cut point falls on consecutive spaces', () => {
        test('then it should not leave a trailing space before the ellipsis', () => {
            expect(createExcerpt('Building  an accessible portfolio', 10)).toBe('Building…');
        });
    });

    describe('when a single word is longer than the limit', () => {
        test('then it should cut mid-word rather than return nothing', () => {
            expect(createExcerpt('internationalisation', 5)).toBe('inter…');
        });
    });

    describe('when the text is padded with whitespace', () => {
        test('then it should ignore the padding when measuring', () => {
            expect(createExcerpt('   Short enough   ', 12)).toBe('Short enough');
        });
    });
});

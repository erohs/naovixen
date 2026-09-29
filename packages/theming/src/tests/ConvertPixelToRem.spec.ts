import { describe, expect, test } from 'vitest';

import { convertPixelToRem } from '../functions/ConvertPixelToRem.function';

describe('Using convertPixelToRem', () => {
    describe('when converting a multiple of the root size', () => {
        test('then it should return a whole rem value', () => {
            expect(convertPixelToRem(32)).toBe('2rem');
        });
    });

    describe('when converting a value that does not divide evenly', () => {
        test('then it should round to four decimal places', () => {
            expect(convertPixelToRem(21)).toBe('1.3125rem');
        });
    });
});

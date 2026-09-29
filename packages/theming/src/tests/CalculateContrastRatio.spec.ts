import { describe, expect, test } from 'vitest';

import { calculateContrastRatio } from '../functions/CalculateContrastRatio.function';

describe('Using calculateContrastRatio', () => {
    describe('when comparing black with white', () => {
        test('then it should return the maximum ratio of 21', () => {
            expect(calculateContrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 5);
        });
    });

    describe('when the order of the colours is swapped', () => {
        test('then it should return the same ratio', () => {
            expect(calculateContrastRatio('#A84C16', '#F3EADC')).toBe(
                calculateContrastRatio('#F3EADC', '#A84C16'),
            );
        });
    });

    describe('when given something other than a #rrggbb colour', () => {
        test('then it should reject it', () => {
            expect(() => calculateContrastRatio('orange', '#FFFFFF')).toThrow('#rrggbb');
        });
    });
});

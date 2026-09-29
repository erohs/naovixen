import { describe, expect, test } from 'vitest';

import { formatYearsOfExperience } from '../functions/FormatYearsOfExperience.function';

describe('Using formatYearsOfExperience', () => {
    describe('when given one year', () => {
        test('then it should use the singular', () => {
            expect(formatYearsOfExperience(1)).toBe('1 year');
        });
    });

    describe('when given several years', () => {
        test('then it should use the plural', () => {
            expect(formatYearsOfExperience(5)).toBe('5 years');
        });
    });

    describe('when given no years', () => {
        test('then it should use the plural', () => {
            expect(formatYearsOfExperience(0)).toBe('0 years');
        });
    });
});

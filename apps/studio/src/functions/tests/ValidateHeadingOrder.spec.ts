import { describe, expect, test } from 'vitest';

import { validateHeadingOrder } from '../ValidateHeadingOrder.function';

describe('Using validateHeadingOrder, when given a subheading before any heading', () => {
    test('then it should ask for a heading before it', () => {
        const body = [
            { _type: 'block', style: 'normal' },
            { _type: 'block', style: 'h3' },
        ];

        expect(validateHeadingOrder(body)).toBe(
            'A level 3 heading needs a level 2 heading before it.',
        );
    });
});

describe('Using validateHeadingOrder, when given a subheading after a numbered heading', () => {
    test('then it should pass', () => {
        const body = [{ _type: 'sectionHeading' }, { _type: 'block', style: 'h3' }];

        expect(validateHeadingOrder(body)).toBe(true);
    });
});

describe('Using validateHeadingOrder, when given a heading after a subheading', () => {
    test('then it should pass', () => {
        const body = [
            { _type: 'block', style: 'h2' },
            { _type: 'block', style: 'h3' },
            { _type: 'block', style: 'h2' },
        ];

        expect(validateHeadingOrder(body)).toBe(true);
    });
});

describe('Using validateHeadingOrder, when given no body', () => {
    test('then it should pass', () => {
        expect(validateHeadingOrder(undefined)).toBe(true);
    });
});

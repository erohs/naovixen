import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SectionHeading } from '../SectionHeading.component';

describe('Using SectionHeading, given no level, when it renders', () => {
    test('then it should be a level 2 heading', () => {
        render(<SectionHeading>Example section</SectionHeading>);

        expect(screen.getByRole('heading', { level: 2, name: 'Example section' })).toBeDefined();
    });
});

describe('Using SectionHeading, given a number, when it renders', () => {
    test('then it should leave the number out of the heading name', () => {
        render(<SectionHeading number="01">Example section</SectionHeading>);

        expect(screen.getByRole('heading', { name: 'Example section' })).toBeDefined();
    });
});

describe('Using SectionHeading, given an intro, when it renders', () => {
    test('then it should show the intro as a paragraph', () => {
        render(<SectionHeading intro="An introduction.">Example section</SectionHeading>);

        expect(screen.getByRole('paragraph')).toHaveProperty('textContent', 'An introduction.');
    });
});

import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderTestimonial } from '../../../constants/PlaceholderTestimonial.const';
import { TestimonialSection } from '../TestimonialSection.component';

describe('Using TestimonialSection', () => {
    describe('when it renders', () => {
        test('then it should be a section named by its heading', () => {
            render(<TestimonialSection />);

            expect(screen.getByRole('region', { name: 'Testimonial' })).toBeDefined();
        });

        test('then it should have a level 2 heading', () => {
            render(<TestimonialSection />);

            expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeDefined();
        });

        test('then it should show the quote', () => {
            render(<TestimonialSection />);

            expect(screen.getByText(placeholderTestimonial.quote)).toBeDefined();
        });

        test('then it should name who said it', () => {
            render(<TestimonialSection />);

            expect(screen.getByText(placeholderTestimonial.name)).toBeDefined();
        });

        test('then it should give their role', () => {
            render(<TestimonialSection />);

            expect(screen.getByText(placeholderTestimonial.role)).toBeDefined();
        });

        test('then it should have no accessibility violations', async () => {
            render(<TestimonialSection />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

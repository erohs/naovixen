import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestimonialAttribution } from '../TestimonialAttribution.component';

const testimonial = { quote: 'An example quote.', name: 'Example Person', role: 'Example role' };

const renderInFigure = (): void => {
    render(
        <figure>
            <blockquote>{testimonial.quote}</blockquote>
            <TestimonialAttribution testimonial={testimonial} />
        </figure>,
    );
};

describe('Using TestimonialAttribution', () => {
    describe('given a testimonial', () => {
        describe('when it renders in a figure', () => {
            test('then it should caption the figure with the name and role', () => {
                renderInFigure();

                expect(screen.getByRole('figure').textContent).toContain(
                    'Example PersonExample role',
                );
            });

            test('then it should name the photo placeholder after the person', () => {
                renderInFigure();

                expect(
                    screen.getByRole('img', { name: 'Photo placeholder: Example Person' }),
                ).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                renderInFigure();

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});

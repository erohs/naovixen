import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '@naovixen/component-testing';
import { SectionHeading } from '../SectionHeading.component';

describe('Using SectionHeading', () => {
    describe('given heading text', () => {
        describe('when it renders', () => {
            test('then it should be a level 2 heading', () => {
                render(<SectionHeading>Example section</SectionHeading>);

                expect(
                    screen.getByRole('heading', { level: 2, name: 'Example section' }),
                ).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <SectionHeading number="01" intro="An introduction.">
                        Example section
                    </SectionHeading>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a level', () => {
        describe('when it renders', () => {
            test('then it should be a heading at that level', () => {
                render(<SectionHeading level={3}>Example subsection</SectionHeading>);

                expect(screen.getByRole('heading', { level: 3 })).toBeDefined();
            });
        });
    });

    describe('given a number', () => {
        describe('when it renders', () => {
            test('then it should leave the number out of the heading name', () => {
                render(<SectionHeading number="01">Example section</SectionHeading>);

                expect(screen.getByRole('heading', { name: 'Example section' })).toBeDefined();
            });
        });
    });

    describe('given an intro', () => {
        describe('when it renders', () => {
            test('then it should show the intro as a paragraph', () => {
                render(<SectionHeading intro="An introduction.">Example section</SectionHeading>);

                expect(screen.getByRole('paragraph')).toHaveProperty(
                    'textContent',
                    'An introduction.',
                );
            });
        });
    });

    describe('given an id', () => {
        describe('when a section is labelled by it', () => {
            test('then it should name the section', () => {
                render(
                    <section aria-labelledby="example-section">
                        <SectionHeading headingId="example-section">Example section</SectionHeading>
                    </section>,
                );

                expect(screen.getByRole('region', { name: 'Example section' })).toBeDefined();
            });
        });
    });
});

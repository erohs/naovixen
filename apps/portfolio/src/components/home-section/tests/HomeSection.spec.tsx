import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { HomeSection } from '../HomeSection.component';

describe('Using HomeSection', () => {
    describe('given a heading and content', () => {
        describe('when it renders', () => {
            test('then it should be a section named by its heading', () => {
                render(
                    <HomeSection heading="Example section" headingId="example-title">
                        <p>Example content</p>
                    </HomeSection>,
                );

                expect(screen.getByRole('region', { name: 'Example section' })).toBeDefined();
            });

            test('then it should have a level 2 heading', () => {
                render(
                    <HomeSection heading="Example section" headingId="example-title">
                        <p>Example content</p>
                    </HomeSection>,
                );

                expect(
                    screen.getByRole('heading', { level: 2, name: 'Example section' }),
                ).toBeDefined();
            });

            test('then it should show the content', () => {
                render(
                    <HomeSection heading="Example section" headingId="example-title">
                        <p>Example content</p>
                    </HomeSection>,
                );

                expect(screen.getByText('Example content')).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <HomeSection heading="Example section" headingId="example-title">
                        <p>Example content</p>
                    </HomeSection>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given an intro', () => {
        describe('when it renders', () => {
            test('then it should show the intro', () => {
                render(
                    <HomeSection
                        heading="Example section"
                        headingId="example-title"
                        intro="An example intro."
                    />,
                );

                expect(screen.getByText('An example intro.')).toBeDefined();
            });
        });
    });

    describe('given an action', () => {
        describe('when it renders', () => {
            test('then it should show the action', () => {
                render(
                    <HomeSection
                        heading="Example section"
                        headingId="example-title"
                        action={<a href="/example">See all</a>}
                    />,
                );

                expect(screen.getByRole('link', { name: 'See all' })).toBeDefined();
            });
        });
    });

    describe('given intrinsic props', () => {
        describe('when it renders', () => {
            test('then it should pass them through to the section', () => {
                render(
                    <HomeSection
                        heading="Example section"
                        headingId="example-title"
                        id="example"
                    />,
                );

                expect(screen.getByRole('region').id).toBe('example');
            });
        });
    });
});

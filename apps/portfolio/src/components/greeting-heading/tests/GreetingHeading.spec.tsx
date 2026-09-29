import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { GreetingHeading } from '../GreetingHeading.component';

describe('Using GreetingHeading', () => {
    describe('given a greeting and a heading', () => {
        describe('when it renders', () => {
            test('then it should be the page heading', () => {
                render(<GreetingHeading greeting="an example aside">Example page</GreetingHeading>);

                expect(
                    screen.getByRole('heading', { level: 1, name: 'Example page' }),
                ).toBeDefined();
            });

            test('then it should show the greeting', () => {
                render(<GreetingHeading greeting="an example aside">Example page</GreetingHeading>);

                expect(screen.getByText('an example aside')).toBeDefined();
            });

            test('then it should put the greeting before the heading in reading order', () => {
                render(<GreetingHeading greeting="an example aside">Example page</GreetingHeading>);

                const greeting = screen.getByText('an example aside');
                const heading = screen.getByRole('heading', { level: 1 });

                expect(
                    greeting.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING,
                ).toBeTruthy();
            });

            test('then it should have no accessibility violations', async () => {
                render(<GreetingHeading greeting="an example aside">Example page</GreetingHeading>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});

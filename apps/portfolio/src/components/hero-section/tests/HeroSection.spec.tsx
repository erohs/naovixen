import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderHomePage } from '../../../constants/PlaceholderHomePage.const';
import { HeroSection } from '../HeroSection.component';

describe('Using HeroSection', () => {
    describe('when it renders', () => {
        test('then it should be a section named by its heading', () => {
            render(<HeroSection />);

            expect(screen.getByRole('region', { name: 'Naomi Shore' })).toBeDefined();
        });

        test('then it should be the page heading', () => {
            render(<HeroSection />);

            expect(screen.getByRole('heading', { level: 1, name: 'Naomi Shore' })).toBeDefined();
        });

        test('then it should show the greeting', () => {
            render(<HeroSection />);

            expect(screen.getByText(placeholderHomePage.greeting)).toBeDefined();
        });

        test('then it should show the summary', () => {
            render(<HeroSection />);

            expect(screen.getByText(placeholderHomePage.summary)).toBeDefined();
        });

        test('then it should have no accessibility violations', async () => {
            render(<HeroSection />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

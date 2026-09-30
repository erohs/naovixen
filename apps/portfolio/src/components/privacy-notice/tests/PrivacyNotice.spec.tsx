import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderEmailAddress } from '../../../constants/PlaceholderEmailAddress.const';
import { placeholderPrivacyPage } from '../../../constants/PlaceholderPrivacyPage.const';
import { PrivacyNotice } from '../PrivacyNotice.component';

describe('Using PrivacyNotice', () => {
    describe('when it renders', () => {
        test('then it should give the machine-readable date it was last updated', () => {
            render(<PrivacyNotice />);

            expect(screen.getByRole('time').getAttribute('datetime')).toBe(
                placeholderPrivacyPage.lastUpdated,
            );
        });

        test('then it should show when it was last updated in words', () => {
            render(<PrivacyNotice />);

            expect(screen.getByRole('time').parentElement?.textContent).toBe(
                'Last updated 29 September 2026',
            );
        });

        test('then it should head its sections at level 2', () => {
            render(<PrivacyNotice />);

            expect(
                screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent),
            ).toEqual(['Cookies and analytics', 'Your rights']);
        });

        test('then it should link to the email address', () => {
            render(<PrivacyNotice />);

            expect(
                screen.getByRole('link', { name: placeholderEmailAddress }).getAttribute('href'),
            ).toBe(`mailto:${placeholderEmailAddress}`);
        });

        test('then it should have no accessibility violations', async () => {
            render(<PrivacyNotice />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

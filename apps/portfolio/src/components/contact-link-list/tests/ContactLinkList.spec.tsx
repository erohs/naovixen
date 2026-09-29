import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderContactLinks } from '../../../constants/PlaceholderContactLinks.const';
import { placeholderCvPath } from '../../../constants/PlaceholderCvPath.const';
import { ContactLinkList } from '../ContactLinkList.component';

describe('Using ContactLinkList', () => {
    describe('when it renders', () => {
        test('then it should list each contact link and the CV', () => {
            render(<ContactLinkList />);

            expect(screen.getAllByRole('listitem')).toHaveLength(
                placeholderContactLinks.length + 1,
            );
        });

        test('then it should link to each profile', () => {
            render(<ContactLinkList />);

            expect(
                screen
                    .getAllByRole('link', { name: /\(opens in new tab\)$/ })
                    .map((link) => link.getAttribute('href')),
            ).toEqual(placeholderContactLinks.map((contactLink) => contactLink.url));
        });

        test('then it should link to the CV', () => {
            render(<ContactLinkList />);

            expect(screen.getByRole('link', { name: 'Download CV PDF' }).getAttribute('href')).toBe(
                placeholderCvPath,
            );
        });

        test('then it should download the CV rather than open it', () => {
            render(<ContactLinkList />);

            expect(
                screen.getByRole('link', { name: 'Download CV PDF' }).hasAttribute('download'),
            ).toBe(true);
        });

        test('then it should have no accessibility violations', async () => {
            render(<ContactLinkList />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

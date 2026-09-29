import { findAxeViolations } from '@naovixen/component-testing';
import { gitHubIcon } from '@naovixen/components';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import type { IContactLink } from '../../../interfaces/IContactLink';
import { ContactLinkTile } from '../ContactLinkTile.component';

const contactLink: IContactLink = {
    label: 'Example site',
    detail: 'example.com/profile',
    url: 'https://example.com/profile',
    icon: gitHubIcon,
};

describe('Using ContactLinkTile', () => {
    describe('given a contact link', () => {
        describe('when it renders', () => {
            test('then it should name the link by its label, detail and new tab hint', () => {
                render(<ContactLinkTile contactLink={contactLink} />);

                expect(
                    screen.getByRole('link', {
                        name: 'Example site example.com/profile (opens in new tab)',
                    }),
                ).toBeDefined();
            });

            test('then it should link to the profile', () => {
                render(<ContactLinkTile contactLink={contactLink} />);

                expect(screen.getByRole('link').getAttribute('href')).toBe(
                    'https://example.com/profile',
                );
            });

            test('then it should open in a new tab', () => {
                render(<ContactLinkTile contactLink={contactLink} />);

                expect(screen.getByRole('link').getAttribute('target')).toBe('_blank');
            });

            test('then it should not hand the other site this window', () => {
                render(<ContactLinkTile contactLink={contactLink} />);

                expect(screen.getByRole('link').getAttribute('rel')).toBe('noopener noreferrer');
            });

            test('then it should have no accessibility violations', async () => {
                render(<ContactLinkTile contactLink={contactLink} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});

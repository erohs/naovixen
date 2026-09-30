import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SocialLinkList } from '../SocialLinkList.component';

const links = [
    { label: 'Example profile', href: 'https://example.com' },
    { label: 'Email', href: 'mailto:hello@example.com' },
];

describe('Using SocialLinkList, given a profile and an email address, when it renders', () => {
    test('then it should open the profile in a new tab', () => {
        render(<SocialLinkList links={links} />);

        expect(
            screen.getByRole('link', { name: 'Example profile (opens in new tab)' }),
        ).toHaveProperty('target', '_blank');
    });

    test('then it should open the email address in place', () => {
        render(<SocialLinkList links={links} />);

        expect(screen.getByRole('link', { name: 'Email' }).hasAttribute('target')).toBe(false);
    });
});

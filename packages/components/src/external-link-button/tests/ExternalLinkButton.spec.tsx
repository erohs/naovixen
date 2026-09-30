import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ExternalLinkButton } from '../ExternalLinkButton.component';

describe('Using ExternalLinkButton, given only an href and text, when it renders', () => {
    test('then it should warn that it opens a new tab', () => {
        render(<ExternalLinkButton href="https://example.com">Live demo</ExternalLinkButton>);

        expect(screen.getByRole('link', { name: 'Live demo (opens in new tab)' })).toHaveProperty(
            'target',
            '_blank',
        );
    });

    test('then it should not give the other site a handle on this window', () => {
        render(<ExternalLinkButton href="https://example.com">Live demo</ExternalLinkButton>);

        expect(screen.getByRole('link')).toHaveProperty('rel', 'noopener noreferrer');
    });
});

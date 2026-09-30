import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ExternalLink } from '../ExternalLink.component';

describe('Using ExternalLink, given only an href and text, when it renders', () => {
    test('then it should warn that it opens a new tab', () => {
        render(<ExternalLink href="https://example.com">Example</ExternalLink>);

        expect(screen.getByRole('link', { name: 'Example (opens in new tab)' })).toHaveProperty(
            'target',
            '_blank',
        );
    });

    test('then it should not give the other site a handle on this window', () => {
        render(<ExternalLink href="https://example.com">Example</ExternalLink>);

        expect(screen.getByRole('link')).toHaveProperty('rel', 'noopener noreferrer');
    });
});

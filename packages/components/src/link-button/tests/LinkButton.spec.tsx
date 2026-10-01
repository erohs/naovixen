import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { LinkButton } from '../LinkButton.component';

describe('Using LinkButton, given an href, when it renders', () => {
    test('then it should be announced as a button', () => {
        render(<LinkButton href="/contact">Get in touch</LinkButton>);

        expect(screen.getByRole('button', { name: 'Get in touch' })).toBeDefined();
    });

    test('then it should still be an anchor to the href, so it can open in a new tab', () => {
        render(<LinkButton href="/contact">Get in touch</LinkButton>);

        expect(screen.getByRole('button', { name: 'Get in touch' })).toHaveProperty(
            'pathname',
            '/contact',
        );
    });
});

describe('Using LinkButton, given it has focus, when Space is pressed', () => {
    test('then it should be followed, as a button would be pressed', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(
            <LinkButton href="#main" onClick={onClick}>
                Skip to content
            </LinkButton>,
        );
        await user.tab();

        await user.keyboard(' ');

        expect(onClick).toHaveBeenCalledOnce();
    });
});

describe('Using LinkButton, given an href on another site, when it renders', () => {
    test('then it should warn that it opens a new tab', () => {
        render(<LinkButton href="https://example.com">Live demo</LinkButton>);

        expect(
            screen.getByRole('button', { name: /^Live demo ?\(opens in new tab\)$/ }),
        ).toHaveProperty('target', '_blank');
    });
});

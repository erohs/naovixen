import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { SkipLink } from '../SkipLink.component';

/** jsdom does no layout, so it has no `scrollIntoView`; the jump only needs it to exist. */
beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
    window.history.replaceState(null, '', '/');
});

async function followSkipLink(): Promise<void> {
    const user = userEvent.setup();
    render(
        <>
            <SkipLink>Skip to content</SkipLink>
            <main id="main" tabIndex={-1} />
        </>,
    );

    await user.click(screen.getByRole('button', { name: 'Skip to content' }));
}

describe('Using SkipLink, given a main element to skip to, when it is followed', () => {
    test('then it should move focus to the main element', async () => {
        await followSkipLink();

        expect(screen.getByRole('main').matches(':focus')).toBe(true);
    });

    test('then it should leave the address without a fragment', async () => {
        await followSkipLink();

        expect(window.location.hash).toBe('');
    });
});

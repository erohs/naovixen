import { findAxeViolations } from '@naovixen/nvpack/testing';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { NotFoundPage } from '../NotFoundPage.component';

function renderNotFoundPage(): Promise<unknown> {
    return renderWithRouter(<NotFoundPage />, ['/', '/missing'], '/missing');
}

describe('Using NotFoundPage', () => {
    describe('when it renders', () => {
        test('then it should say the page was not found in its heading', async () => {
            await renderNotFoundPage();

            expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeDefined();
        });

        test('then it should explain what may have happened', async () => {
            await renderNotFoundPage();

            expect(screen.getByText(/The page may have moved/)).toBeDefined();
        });

        test('then it should link to the home page', async () => {
            await renderNotFoundPage();

            expect(
                screen.getByRole('link', { name: 'Go to the home page' }).getAttribute('href'),
            ).toBe('/');
        });

        test('then it should have no accessibility violations', async () => {
            await renderNotFoundPage();

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

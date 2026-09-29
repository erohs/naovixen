import { findAxeViolations } from '@naovixen/component-testing';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderInterests } from '../../../constants/PlaceholderInterests.const';
import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { AboutSummary } from '../AboutSummary.component';

function renderAboutSummary(): Promise<unknown> {
    return renderWithRouter(<AboutSummary />, ['/about']);
}

describe('Using AboutSummary', () => {
    describe('when it renders', () => {
        test('then it should head the summary at level 2', async () => {
            await renderAboutSummary();

            expect(screen.getByRole('heading', { level: 2, name: 'About me' })).toBeDefined();
        });

        test('then it should list the interests', async () => {
            await renderAboutSummary();

            expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual(
                placeholderInterests,
            );
        });

        test('then it should link to the about page', async () => {
            await renderAboutSummary();

            expect(screen.getByRole('link', { name: 'More about me' }).getAttribute('href')).toBe(
                '/about',
            );
        });

        test('then it should have no accessibility violations', async () => {
            await renderAboutSummary();

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

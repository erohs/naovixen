import { findAxeViolations } from '@naovixen/nvpack/testing';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderInterests } from '../../../constants/PlaceholderInterests.const';
import { placeholderPhotoDescription } from '../../../constants/PlaceholderPhotoDescription.const';
import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { AboutSection } from '../AboutSection.component';

function renderAboutSection(): Promise<unknown> {
    return renderWithRouter(<AboutSection />, ['/about']);
}

describe('Using AboutSection', () => {
    describe('when it renders', () => {
        test('then it should be a section named by its heading', async () => {
            await renderAboutSection();

            expect(screen.getByRole('region', { name: 'About me' })).toBeDefined();
        });

        test('then it should have a level 2 heading', async () => {
            await renderAboutSection();

            expect(screen.getByRole('heading', { level: 2, name: 'About me' })).toBeDefined();
        });

        test('then it should head the interests at level 3', async () => {
            await renderAboutSection();

            expect(
                screen.getByRole('heading', { level: 3, name: 'Away from the keyboard' }),
            ).toBeDefined();
        });

        test('then it should list the interests', async () => {
            await renderAboutSection();

            expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual(
                placeholderInterests,
            );
        });

        test('then it should link to the about page', async () => {
            await renderAboutSection();

            expect(screen.getByRole('link', { name: 'More about me' }).getAttribute('href')).toBe(
                '/about',
            );
        });

        test('then it should show the photo with its description', async () => {
            await renderAboutSection();

            expect(screen.getByRole('img', { name: placeholderPhotoDescription })).toBeDefined();
        });

        test('then it should have no accessibility violations', async () => {
            await renderAboutSection();

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

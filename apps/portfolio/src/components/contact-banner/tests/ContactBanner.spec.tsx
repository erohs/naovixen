import { findAxeViolations } from '@naovixen/component-testing';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderEmailAddress } from '../../../constants/PlaceholderEmailAddress.const';
import { placeholderHomePage } from '../../../constants/PlaceholderHomePage.const';
import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { ContactBanner } from '../ContactBanner.component';

function renderContactBanner(): Promise<unknown> {
    return renderWithRouter(<ContactBanner />, ['/contact']);
}

describe('Using ContactBanner', () => {
    describe('when it renders', () => {
        test('then it should be a section named by its heading', async () => {
            await renderContactBanner();

            expect(
                screen.getByRole('region', { name: placeholderHomePage.contactHeading }),
            ).toBeDefined();
        });

        test('then it should have a level 2 heading', async () => {
            await renderContactBanner();

            expect(
                screen.getByRole('heading', { level: 2, name: placeholderHomePage.contactHeading }),
            ).toBeDefined();
        });

        test('then it should link to the contact page', async () => {
            await renderContactBanner();

            expect(screen.getByRole('link', { name: 'Get in touch' }).getAttribute('href')).toBe(
                '/contact',
            );
        });

        test('then it should link to the email address', async () => {
            await renderContactBanner();

            expect(
                screen.getByRole('link', { name: placeholderEmailAddress }).getAttribute('href'),
            ).toBe(`mailto:${placeholderEmailAddress}`);
        });

        test('then it should have no accessibility violations', async () => {
            await renderContactBanner();

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});

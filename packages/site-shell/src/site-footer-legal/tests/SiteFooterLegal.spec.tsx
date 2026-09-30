import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SiteFooterLegal } from '../SiteFooterLegal.component';

const privacyLink = { label: 'Privacy notice', path: '/privacy' };

describe('Using SiteFooterLegal, given the privacy notice is shown, when it renders', () => {
    test('then it should mark the privacy link as the current page', () => {
        render(
            <SiteFooterLegal
                copyrightHolder="Example Name"
                year={2026}
                privacyLink={privacyLink}
                currentPath="/privacy"
            />,
        );

        expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Privacy notice');
    });
});

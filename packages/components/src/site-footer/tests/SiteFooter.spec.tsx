import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import type { ISiteFooterProps } from '../interfaces/ISiteFooterProps';
import { SiteFooter } from '../SiteFooter.component';

const footerProps: ISiteFooterProps = {
  navigationItems: [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
  ],
  socialLinks: [
    { label: 'Example profile', url: 'https://example.com' },
    { label: 'Email', url: 'mailto:hello@example.com' },
  ],
  blurb: 'An example line about the site.',
  copyrightHolder: 'Example Name',
  year: 2026,
  privacyLink: { label: 'Privacy notice', path: '/privacy' },
  currentPath: '/work/example',
};

const mascot = <img src="/example.png" alt="Example mascot" width={96} height={60} />;

describe('Using SiteFooter', () => {
  describe('given a page beneath the work section is shown', () => {
    describe('when it renders', () => {
      test('then it should be the content information landmark', () => {
        renderWithProvider(<SiteFooter {...footerProps} />);

        expect(screen.getByRole('contentinfo')).toBeDefined();
      });

      test('then it should offer the site links under a "site" heading', () => {
        renderWithProvider(<SiteFooter {...footerProps} />);

        expect(screen.getByRole('navigation', { name: 'site' })).toBeDefined();
      });

      test('then it should offer the profile links under an "elsewhere" heading', () => {
        renderWithProvider(<SiteFooter {...footerProps} />);

        expect(screen.getByRole('navigation', { name: 'elsewhere' })).toBeDefined();
      });

      test('then it should mark the work section as current', () => {
        renderWithProvider(<SiteFooter {...footerProps} />);

        expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
      });

      test('then it should show the blurb', () => {
        renderWithProvider(<SiteFooter {...footerProps} />);

        expect(screen.getByText('An example line about the site.')).toBeDefined();
      });

      test('then it should show the copyright line', () => {
        renderWithProvider(<SiteFooter {...footerProps} />);

        expect(screen.getByText('© 2026 Example Name')).toBeDefined();
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<SiteFooter {...footerProps} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given a mascot', () => {
    describe('when it renders', () => {
      test('then it should draw the mascot', () => {
        renderWithProvider(<SiteFooter {...footerProps} mascot={mascot} />);

        expect(screen.getByRole('img', { hidden: true })).toBeDefined();
      });

      test('then it should hide the mascot from assistive technology', () => {
        renderWithProvider(<SiteFooter {...footerProps} mascot={mascot} />);

        expect(screen.queryByRole('img')).toBeNull();
      });
    });
  });
});

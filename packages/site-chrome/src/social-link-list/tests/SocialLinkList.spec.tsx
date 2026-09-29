import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { SocialLinkList } from '../SocialLinkList.component';

const links = [
  { label: 'Example profile', url: 'https://example.com' },
  { label: 'Email', url: 'mailto:hello@example.com' },
];

describe('Using SocialLinkList', () => {
  describe('given a profile and an email address', () => {
    describe('when it renders', () => {
      test('then it should open the profile in a new tab', () => {
        renderWithProvider(<SocialLinkList links={links} />);

        expect(
          screen.getByRole('link', { name: 'Example profile (opens in new tab)' }),
        ).toHaveProperty('target', '_blank');
      });

      test('then it should open the email address in place', () => {
        renderWithProvider(<SocialLinkList links={links} />);

        expect(screen.getByRole('link', { name: 'Email' }).hasAttribute('target')).toBe(false);
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<SocialLinkList links={links} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});

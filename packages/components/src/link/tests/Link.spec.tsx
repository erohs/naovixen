import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { LinkDestination } from '../../enums/LinkDestination';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { RouterLinkForTests } from '../../tests/functions/RouterLinkForTests.component';
import { Link } from '../Link.component';

describe('Using Link', () => {
  describe('given a link to a page on the site', () => {
    describe('when it renders', () => {
      test('then it should go through the router', () => {
        renderWithProvider(<Link href="/work">Work</Link>, { linkComponent: RouterLinkForTests });

        expect(screen.getByRole('link', { name: 'Work' }).dataset.routed).toBe('true');
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<Link href="/work">Work</Link>);

        expect(await findAxeViolations()).toEqual([]);
      });
    });

    describe('and it is the current page', () => {
      describe('when it renders', () => {
        test('then it should mark itself as the current page', () => {
          renderWithProvider(
            <Link href="/work" isCurrent>
              Work
            </Link>,
          );

          expect(screen.getByRole('link', { current: 'page' })).toHaveProperty(
            'textContent',
            'Work',
          );
        });
      });
    });
  });

  describe('given a link to another site', () => {
    describe('when it renders', () => {
      test('then it should warn that it opens a new tab', () => {
        renderWithProvider(
          <Link href="https://example.com" destination={LinkDestination.External}>
            Example
          </Link>,
        );

        expect(screen.getByRole('link', { name: 'Example (opens in new tab)' })).toHaveProperty(
          'target',
          '_blank',
        );
      });

      test('then it should not go through the router', () => {
        renderWithProvider(
          <Link href="https://example.com" destination={LinkDestination.External}>
            Example
          </Link>,
          { linkComponent: RouterLinkForTests },
        );

        expect(screen.getByRole('link').dataset.routed).toBeUndefined();
      });
    });
  });

  describe('given a link to a file', () => {
    describe('when it renders', () => {
      test('then it should offer the file as a download', () => {
        renderWithProvider(
          <Link href="/cv.pdf" destination={LinkDestination.Download}>
            CV
          </Link>,
        );

        expect(screen.getByRole('link', { name: 'CV' }).hasAttribute('download')).toBe(true);
      });
    });
  });

  describe('given a link to an email address', () => {
    describe('when it renders', () => {
      test('then it should open in place rather than in a new tab', () => {
        renderWithProvider(
          <Link href="mailto:hello@example.com" destination={LinkDestination.Email}>
            Email
          </Link>,
        );

        expect(screen.getByRole('link', { name: 'Email' }).hasAttribute('target')).toBe(false);
      });

      test('then it should not go through the router', () => {
        renderWithProvider(
          <Link href="mailto:hello@example.com" destination={LinkDestination.Email}>
            Email
          </Link>,
          { linkComponent: RouterLinkForTests },
        );

        expect(screen.getByRole('link').dataset.routed).toBeUndefined();
      });
    });
  });
});

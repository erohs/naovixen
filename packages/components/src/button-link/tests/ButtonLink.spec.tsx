import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ButtonVariant } from '../../enums/ButtonVariant';
import { LinkDestination } from '../../enums/LinkDestination';
import { IconName } from '../../enums/IconName';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { ButtonLink } from '../ButtonLink.component';

describe('Using ButtonLink', () => {
  describe('given a page on the site', () => {
    describe('when it renders', () => {
      test('then it should be a link, because it navigates', () => {
        renderWithProvider(
          <ButtonLink href="/work" variant={ButtonVariant.Primary} icon={IconName.ArrowRight}>
            See my work
          </ButtonLink>,
        );

        expect(screen.getByRole('link', { name: 'See my work' })).toHaveProperty(
          'pathname',
          '/work',
        );
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<ButtonLink href="/work">See my work</ButtonLink>);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given another site', () => {
    describe('when it renders', () => {
      test('then it should warn that it opens a new tab', () => {
        renderWithProvider(
          <ButtonLink href="https://example.com" destination={LinkDestination.External}>
            Live demo
          </ButtonLink>,
        );

        expect(screen.getByRole('link', { name: 'Live demo (opens in new tab)' })).toBeDefined();
      });
    });
  });
});

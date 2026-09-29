import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { IconName } from '../../enums/IconName';
import { LinkDestination } from '../../enums/LinkDestination';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { LinkTile } from '../LinkTile.component';

describe('Using LinkTile', () => {
  describe('given a link to another site', () => {
    describe('when it renders', () => {
      test('then it should be one link named by its label, detail and new tab hint', () => {
        renderWithProvider(
          <LinkTile
            href="https://example.com"
            destination={LinkDestination.External}
            label="Example"
            detail="example.com"
            icon={IconName.GitHub}
          />,
        );

        expect(
          screen.getByRole('link', { name: 'Example example.com (opens in new tab)' }),
        ).toHaveProperty('href', 'https://example.com/');
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(
          <LinkTile
            href="https://example.com"
            destination={LinkDestination.External}
            label="Example"
            detail="example.com"
            icon={IconName.GitHub}
          />,
        );

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given a link to a file', () => {
    describe('when it renders', () => {
      test('then it should offer the file as a download', () => {
        renderWithProvider(
          <LinkTile
            href="/example.pdf"
            destination={LinkDestination.Download}
            label="Example file"
            detail="PDF"
            icon={IconName.Download}
          />,
        );

        expect(screen.getByRole('link').hasAttribute('download')).toBe(true);
      });
    });
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { IconName } from '../../enums/IconName';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Icon } from '../Icon.component';

describe('Using Icon', () => {
  describe('when it renders', () => {
    test('then it should be hidden from assistive technology', () => {
      render(<Icon name={IconName.Sun} />);

      expect(screen.queryByRole('img')).toBeNull();
    });

    test('then it should have no accessibility violations', async () => {
      render(<Icon name={IconName.GitHub} />);

      expect(await findAxeViolations()).toEqual([]);
    });
  });
});

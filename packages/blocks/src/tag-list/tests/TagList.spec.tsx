import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { TagList } from '../TagList.component';

describe('Using TagList', () => {
  describe('given a label and some tags', () => {
    describe('when it renders', () => {
      test('then it should be a list named by the label', () => {
        render(<TagList label="Tech stack" tags={['TypeScript', 'React']} />);

        expect(screen.getByRole('list', { name: 'Tech stack' })).toBeDefined();
      });

      test('then it should list every tag in order', () => {
        render(<TagList label="Tech stack" tags={['TypeScript', 'React']} />);

        const items = within(screen.getByRole('list')).getAllByRole('listitem');

        expect(items.map((item) => item.textContent)).toEqual(['TypeScript', 'React']);
      });

      test('then it should have no accessibility violations', async () => {
        render(<TagList label="Tech stack" tags={['TypeScript', 'React']} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});

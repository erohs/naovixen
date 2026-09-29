import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { IconName } from '../../enums/IconName';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Button } from '../Button.component';

describe('Using Button', () => {
  describe('given a label, a meta note and an icon', () => {
    describe('when it renders', () => {
      test('then it should be named by its text and not its icon', () => {
        render(
          <Button meta="PDF" icon={IconName.Download}>
            Download CV
          </Button>,
        );

        expect(screen.getByRole('button', { name: 'Download CV PDF' })).toBeDefined();
      });

      test('then it should not submit a surrounding form by default', () => {
        render(<Button>Save</Button>);

        expect(screen.getByRole('button')).toHaveProperty('type', 'button');
      });

      test('then it should have no accessibility violations', async () => {
        render(<Button icon={IconName.ArrowRight}>Next</Button>);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given a press handler', () => {
    describe('when it is pressed', () => {
      test('then it should call the handler once', async () => {
        const onPress = vi.fn();
        render(<Button onPress={onPress}>Save</Button>);

        await userEvent.setup().click(screen.getByRole('button'));

        expect(onPress).toHaveBeenCalledOnce();
      });
    });

    describe('when it is activated from the keyboard', () => {
      test('then it should call the handler', async () => {
        const onPress = vi.fn();
        render(<Button onPress={onPress}>Save</Button>);
        const user = userEvent.setup();

        await user.tab();
        await user.keyboard('{Enter}');

        expect(onPress).toHaveBeenCalledOnce();
      });
    });
  });
});

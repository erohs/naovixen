import { Space } from '../enums/Space';
import type { IShowcase } from '../interfaces/IShowcase';
import { Stack } from './Stack.component';

export const stackShowcase: IShowcase = {
  name: 'Stack',
  examples: [
    {
      name: 'Default gap',
      render: () => (
        <Stack>
          <p>First paragraph</p>
          <p>Second paragraph</p>
        </Stack>
      ),
    },
    {
      name: 'Gap between groups',
      render: () => (
        <Stack gap={Space.BetweenGroups}>
          <p>First group</p>
          <p>Second group</p>
        </Stack>
      ),
    },
    {
      name: 'As a list',
      render: () => (
        <Stack as="ul" gap={Space.BetweenText}>
          <li>First item</li>
          <li>Second item</li>
        </Stack>
      ),
    },
  ],
};

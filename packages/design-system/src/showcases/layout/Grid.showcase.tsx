import { Space } from '../enums/Space';
import type { IShowcase } from '../interfaces/IShowcase';
import { Grid } from './Grid.component';

export const gridShowcase: IShowcase = {
  name: 'Grid',
  examples: [
    {
      name: 'Default gap',
      render: () => (
        <Grid>
          <p>First cell</p>
          <p>Second cell</p>
          <p>Third cell</p>
        </Grid>
      ),
    },
    {
      name: 'As a list, gap between content',
      render: () => (
        <Grid as="ul" gap={Space.BetweenContent}>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </Grid>
      ),
    },
  ],
};

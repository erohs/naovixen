import { Space } from '../enums/Space';
import type { IShowcase } from '../interfaces/IShowcase';
import { Cluster } from './Cluster.component';

export const clusterShowcase: IShowcase = {
  name: 'Cluster',
  examples: [
    {
      name: 'Default gap',
      render: () => (
        <Cluster>
          <span>First</span>
          <span>Second</span>
          <span>Third</span>
        </Cluster>
      ),
    },
    {
      name: 'Gap between text',
      render: () => (
        <Cluster gap={Space.BetweenText}>
          <span>First</span>
          <span>Second</span>
          <span>Third</span>
        </Cluster>
      ),
    },
    {
      name: 'As a list',
      render: () => (
        <Cluster as="ul" gap={Space.BetweenGroups}>
          <li>First item</li>
          <li>Second item</li>
        </Cluster>
      ),
    },
  ],
};

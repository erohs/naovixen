import type { IShowcase } from '../interfaces/IShowcase';
import { Container } from './Container.component';

export const containerShowcase: IShowcase = {
  name: 'Container',
  examples: [
    {
      name: 'Default',
      render: () => (
        <Container>
          <p>Example content at the page width.</p>
        </Container>
      ),
    },
    {
      name: 'As a footer',
      render: () => (
        <Container as="footer">
          <p>Example footer content.</p>
        </Container>
      ),
    },
  ],
};

import type { IShowcase } from '../interfaces/IShowcase';
import { Breadcrumb } from './Breadcrumb.component';

export const breadcrumbShowcase: IShowcase = {
  name: 'Breadcrumb',
  examples: [
    {
      name: 'One level down',
      render: () => (
        <Breadcrumb trail={[{ label: 'Home', path: '/' }]} currentLabel="Example section" />
      ),
    },
    {
      name: 'Two levels down',
      render: () => (
        <Breadcrumb
          trail={[
            { label: 'Home', path: '/' },
            { label: 'Example section', path: '/example' },
          ]}
          currentLabel="Example project"
        />
      ),
    },
  ],
};

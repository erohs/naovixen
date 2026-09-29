import type { IShowcase } from '../interfaces/IShowcase';
import { Tag } from './Tag.component';

export const tagShowcase: IShowcase = {
  name: 'Tag',
  examples: [{ name: 'Default', render: () => <Tag label="TypeScript" /> }],
};

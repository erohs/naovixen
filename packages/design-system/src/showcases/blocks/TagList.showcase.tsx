import type { IShowcase } from '../interfaces/IShowcase';
import { TagList } from './TagList.component';

export const tagListShowcase: IShowcase = {
  name: 'TagList',
  examples: [
    {
      name: 'Several tags',
      render: () => <TagList label="Tech stack" tags={['TypeScript', 'React', 'CSS']} />,
    },
    { name: 'One tag', render: () => <TagList label="Topics" tags={['Accessibility']} /> },
  ],
};

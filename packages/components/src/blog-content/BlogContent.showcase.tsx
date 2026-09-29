import type { IShowcase } from '../interfaces/IShowcase';
import { BlogContent } from './BlogContent.component';
import exampleBlogBody from './constants/ExampleBlogBody.json';

export const blogContentShowcase: IShowcase = {
  name: 'BlogContent',
  examples: [{ name: 'Every block type', render: () => <BlogContent body={exampleBlogBody} /> }],
};

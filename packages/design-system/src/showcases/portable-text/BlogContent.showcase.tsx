import { BlogContent } from '@naovixen/portable-text';

import type { IShowcase } from '../../interfaces/IShowcase';
import exampleBlogBody from './ExampleBlogBody.json';

export const blogContentShowcase: IShowcase = {
    name: 'BlogContent',
    examples: [{ name: 'Every block type', render: () => <BlogContent body={exampleBlogBody} /> }],
};

import type { FunctionComponent } from 'react';
import { BlogContent } from '@naovixen/blog-content';

import { Example } from '../../components/example/Example.component';
import { exampleBlogBody } from '../../constants/ExampleBlogBody.const';

export const BlogContentPage: FunctionComponent = () => (
    <Example name="BlogContent">
        <BlogContent body={exampleBlogBody} />
    </Example>
);

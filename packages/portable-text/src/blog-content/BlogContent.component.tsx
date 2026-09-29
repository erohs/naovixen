import { PortableText } from '@portabletext/react';
import type { FunctionComponent } from 'react';

import { blogContentComponents } from './constants/BlogContentComponents.const';
import type { IBlogContentProps } from './interfaces/IBlogContentProps';

/** A post body in Portable Text, rendered as plain HTML with no client script. */
export const BlogContent: FunctionComponent<IBlogContentProps> = ({ body }) => (
  <div className="nx-blog-content">
    <PortableText value={[...body]} components={blogContentComponents} />
  </div>
);

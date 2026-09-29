import { formatDate, formatReadingTime } from '@naovixen/formatting';
import type { FunctionComponent } from 'react';

import { HeadingSize } from '../enums/HeadingSize';
import { Heading } from '../heading/Heading.component';
import { Link } from '../link/Link.component';
import { TagList } from '../tag-list/TagList.component';
import type { IBlogPostCardProps } from './interfaces/IBlogPostCardProps';

export const BlogPostCard: FunctionComponent<IBlogPostCardProps> = ({
  post,
  href,
  headingLevel,
}) => (
  <article className="nx-blog-post-card">
    <Heading level={headingLevel} size={HeadingSize.H3}>
      <Link href={href}>{post.title}</Link>
    </Heading>
    <p className="nx-blog-post-card__excerpt">{post.excerpt}</p>
    <p className="nx-blog-post-card__meta">
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      <span aria-hidden="true"> · </span>
      <span>{formatReadingTime(post.readingTimeInMinutes)}</span>
    </p>
    <TagList tags={post.tags} label="Topics" />
  </article>
);

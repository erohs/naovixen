import type { FunctionComponent } from 'react';
import { TagList } from '@naovixen/blocks';
import { Heading, HeadingSize, Text, TextVariant } from '@naovixen/components';
import { formatDate, formatReadingTime } from '@naovixen/formatting';

import type { IBlogPostHeaderProps } from './interfaces/IBlogPostHeaderProps';

export const BlogPostHeader: FunctionComponent<IBlogPostHeaderProps> = ({ post, headingId }) => (
    <header className="nx-blog-post-header">
        <Heading level={1} size={HeadingSize.H2} id={headingId}>
            {post.title}
        </Heading>
        <Text variant={TextVariant.Lead} className="nx-blog-post-header__excerpt">
            {post.excerpt}
        </Text>
        <div className="nx-blog-post-header__details">
            <Text variant={TextVariant.Meta}>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true"> · </span>
                <span>{formatReadingTime(post.readingTimeInMinutes)}</span>
            </Text>
            <TagList tags={post.tags} label="Topics" />
        </div>
    </header>
);

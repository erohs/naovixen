import type { FunctionComponent } from 'react';
import { Card, CardTilt, TagList } from '@naovixen/blocks';
import { Heading, HeadingSize, Link, Text, TextVariant } from '@naovixen/components';
import { formatDate, formatReadingTime, joinClassNames } from '@naovixen/formatting';

import type { IPostCardProps } from './interfaces/IPostCardProps';

export const PostCard: FunctionComponent<IPostCardProps> = ({
    post,
    href,
    headingLevel,
    linkComponent = Link,
    tilt = CardTilt.Right,
    className,
    ...cardProps
}) => {
    const LinkComponent = linkComponent;

    return (
        <Card {...cardProps} tilt={tilt} className={joinClassNames('nx-post-card', className)}>
            <Heading level={headingLevel} size={HeadingSize.H3}>
                <LinkComponent href={href}>{post.title}</LinkComponent>
            </Heading>
            <Text className="nx-post-card__excerpt">{post.excerpt}</Text>
            <Text variant={TextVariant.Meta} className="nx-post-card__meta">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true"> · </span>
                <span>{formatReadingTime(post.readingTimeInMinutes)}</span>
            </Text>
            <TagList tags={post.tags} label="Topics" />
        </Card>
    );
};

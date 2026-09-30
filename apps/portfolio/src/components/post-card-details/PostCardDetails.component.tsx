import type { FunctionComponent } from 'react';
import { TagList } from '@naovixen/blocks';
import { Text, TextVariant } from '@naovixen/components';
import { formatDate, formatReadingTime } from '@naovixen/utilities';

import type { IPostCardDetailsProps } from './interfaces/IPostCardDetailsProps';

/** When the post went out, how long it takes to read and what it is about. */
export const PostCardDetails: FunctionComponent<IPostCardDetailsProps> = ({ post }) => (
    <div className="nx-post-card-details">
        <Text variant={TextVariant.Meta}>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            <span>{formatReadingTime(post.readingTimeInMinutes)}</span>
        </Text>
        <TagList tags={post.tags} label="Topics" />
    </div>
);

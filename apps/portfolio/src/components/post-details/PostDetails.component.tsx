import type { FunctionComponent } from 'react';
import { TagList, Text, TextVariant } from '@naovixen/components';
import { formatDate, formatReadingTime } from '@naovixen/utilities';

import type { IPostDetailsProps } from './interfaces/IPostDetailsProps';

/** When the post went out, how long it takes to read and what it is about. */
export const PostDetails: FunctionComponent<IPostDetailsProps> = ({ post, className }) => (
    <div className={className}>
        <Text variant={TextVariant.Meta}>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            <span>{formatReadingTime(post.readingTimeInMinutes)}</span>
        </Text>
        <TagList tags={post.tags} label="Topics" />
    </div>
);

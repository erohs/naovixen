import type { FunctionComponent } from 'react';
import { Tag } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';
import { Cluster, Space } from '@naovixen/layout';

import type { ITagListProps } from './interfaces/ITagListProps';

export const TagList: FunctionComponent<ITagListProps> = ({
    tags,
    label,
    className,
    ...listProps
}) => (
    <Cluster
        {...listProps}
        as="ul"
        gap={Space.BetweenText}
        aria-label={label}
        className={joinClassNames('nx-tag-list', className)}
    >
        {tags.map((tag) => (
            <li key={tag}>
                <Tag>{tag}</Tag>
            </li>
        ))}
    </Cluster>
);

import type { FunctionComponent } from 'react';
import { Tag } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import type { ITagListProps } from './interfaces/ITagListProps';

export const TagList: FunctionComponent<ITagListProps> = ({
    tags,
    label,
    className,
    ...listProps
}) => (
    <ul {...listProps} aria-label={label} className={joinClassNames('nv-tag-list', className)}>
        {tags.map((tag) => (
            <li key={tag}>
                <Tag>{tag}</Tag>
            </li>
        ))}
    </ul>
);

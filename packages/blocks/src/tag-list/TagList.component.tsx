import type { FunctionComponent } from 'react';

import { Tag } from '../tag/Tag.component';
import type { ITagListProps } from './interfaces/ITagListProps';

export const TagList: FunctionComponent<ITagListProps> = ({ tags, label }) => (
  <ul className="nx-cluster nx-tag-list" aria-label={label}>
    {tags.map((tag) => (
      <li key={tag}>
        <Tag label={tag} />
      </li>
    ))}
  </ul>
);

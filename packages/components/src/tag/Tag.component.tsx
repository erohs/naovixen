import type { FunctionComponent } from 'react';

import type { ITagProps } from './interfaces/ITagProps';

export const Tag: FunctionComponent<ITagProps> = ({ label }) => (
  <span className="nx-tag">{label}</span>
);

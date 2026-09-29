import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import type { ICardProps } from './interfaces/ICardProps';

/** Lifts on its shadow and folds up its bottom corner under the pointer or keyboard focus. */
export const Card: FunctionComponent<ICardProps> = ({ className, ...articleProps }) => (
    <article {...articleProps} className={joinClassNames('nx-card', className)} />
);

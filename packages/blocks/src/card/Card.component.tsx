import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { CardHalo } from './enums/CardHalo';
import type { ICardProps } from './interfaces/ICardProps';

export const Card: FunctionComponent<ICardProps> = ({
    halo = CardHalo.None,
    className,
    ...articleProps
}) => (
    <article
        {...articleProps}
        className={joinClassNames('nx-card', `nx-card--halo-${halo}`, className)}
    />
);

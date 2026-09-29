import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { CardHalo } from './enums/CardHalo';
import { CardTilt } from './enums/CardTilt';
import type { ICardProps } from './interfaces/ICardProps';

export const Card: FunctionComponent<ICardProps> = ({
    tilt = CardTilt.Left,
    halo = CardHalo.None,
    className,
    ...articleProps
}) => (
    <article
        {...articleProps}
        className={joinClassNames(
            'nx-card',
            `nx-card--tilt-${tilt}`,
            `nx-card--halo-${halo}`,
            className,
        )}
    />
);

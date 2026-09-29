import type { ComponentPropsWithRef } from 'react';

import type { CardHalo } from '../enums/CardHalo';
import type { CardTilt } from '../enums/CardTilt';

export interface ICardProps extends ComponentPropsWithRef<'article'> {
    readonly tilt?: CardTilt | undefined;
    readonly halo?: CardHalo | undefined;
}

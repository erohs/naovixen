import type { ComponentPropsWithRef } from 'react';

import type { CardHalo } from '../enums/CardHalo';

export interface ICardProps extends ComponentPropsWithRef<'article'> {
    readonly halo?: CardHalo | undefined;
}

import type { ComponentPropsWithRef } from 'react';

import type { TextVariant } from '../enums/TextVariant';

export interface ITextProps extends ComponentPropsWithRef<'p'> {
    readonly variant?: TextVariant | undefined;
}

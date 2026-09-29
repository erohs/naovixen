import type { ComponentPropsWithRef } from 'react';

import type { ButtonVariant } from '../enums/ButtonVariant';

export interface IButtonProps extends ComponentPropsWithRef<'button'> {
    readonly variant?: ButtonVariant | undefined;
}

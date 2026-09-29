import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { ButtonVariant } from './enums/ButtonVariant';
import type { IButtonProps } from './interfaces/IButtonProps';

/** A plain button unless told otherwise, so it never submits a form by accident. */
export const Button: FunctionComponent<IButtonProps> = ({
    variant = ButtonVariant.Secondary,
    type = 'button',
    className,
    children,
    ...buttonProps
}) => (
    <button
        {...buttonProps}
        type={type}
        className={joinClassNames('nx-button', `nx-button--${variant}`, className)}
    >
        {children}
    </button>
);

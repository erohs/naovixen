import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { ButtonIcon } from './ButtonIcon.component';
import { ButtonVariant } from './enums/ButtonVariant';
import type { IButtonProps } from './interfaces/IButtonProps';

const ButtonRoot: FunctionComponent<IButtonProps> = ({
    variant = ButtonVariant.Secondary,
    type = 'button',
    className,
    children,
    ...buttonProps
}) => (
    <button
        {...buttonProps}
        type={type}
        className={joinClassNames('nv-button', `nv-button--${variant}`, className)}
    >
        {children}
    </button>
);

/**
 * Something that acts. A plain button unless told otherwise, so it never submits a form by
 * accident. Its children are its text and, on either side of it, a `Button.Icon`. For something
 * that navigates, see LinkButton.
 */
export const Button = Object.assign(ButtonRoot, { Icon: ButtonIcon });

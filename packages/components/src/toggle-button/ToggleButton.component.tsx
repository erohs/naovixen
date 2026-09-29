import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { Button } from '../button/Button.component';
import type { IToggleButtonProps } from './interfaces/IToggleButtonProps';

/** Its name stays the same whichever state it is in; aria-pressed carries the state. */
export const ToggleButton: FunctionComponent<IToggleButtonProps> = ({
    isPressed,
    className,
    ...buttonProps
}) => (
    <Button
        {...buttonProps}
        className={joinClassNames('nx-toggle-button', className)}
        aria-pressed={isPressed}
    />
);
